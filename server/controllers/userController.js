const { Users } = require("../models/userModel");
const { generatePasswordHash, comparePasswordHash } = require("../utils/bcrypt");
const { genericError } = require("../error/errorHandle");
const { handleMissingProps } = require("../error/handleMissingProps");
const { generateAccessToken } = require("../utils/jwt");


//=======register=========
const register = async (req, res, next) => {
    try {
        const { username, email, mobile, password } = req.body;
        //handle missing props in req.body
        const response = handleMissingProps({ username, email, mobile, password }, res);
        if (response === true) return;


        const isExist = await Users.findOne({ email });
        if (isExist) {
            return res.status(400).json({
                message: 'User already exists'
            })
        };

        //store user in DB
        const hashedPassword = await generatePasswordHash(password);
        const dbResponse = await Users.create({ username, email, mobile, password: hashedPassword });
        res.status(200).json({
            message: 'user register successful'
        });

    } catch (error) {
        next(error);
    }
}



//=====login========
const login = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        //handle missing props in req.body
        const response = handleMissingProps({ email, password }, res);
        if (response === true) return;

        const userData = await Users.findOne({ email });
        if (!userData) {
            return res.status(400).json({
                message: 'user not found.'
            })
        };

        //compare password
        const isPasswordValid = await comparePasswordHash(password, userData.password)
        if (!isPasswordValid) {
            return res.status(400).json({
                message: 'invalid email or password'
            });
        }

        //generate accesstoken and send to client  
        const accessToken =  generateAccessToken(userData._id);
        res.json({  accessToken });

    } catch (error) {
        next(error);

    }
}




//====== home ========
const home = async(req,res,next)=>{

    try {

        const userData = await Users.findById(req.userId).select('-password');
        res.json({
            data: userData
        });

    } catch (error) {
        next(error)
    }

}




module.exports = { register, login, home }