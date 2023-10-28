const { Users } = require("../models/userModel");
const { generatePasswordHash, comparePasswordHash } = require("../utils/bcrypt");
const { handleMissingProps } = require("../error/handleMissingProps");
const { generateAccessToken } = require("../utils/jwt");
const { sendOtpToAdmin, OTP } = require("../utils/twilio");


// global variables
const newOtp = new OTP();
let tempUser;


//=======register=========
const register = async (req, res, next) => {
    try {
        const { username, email, mobile, password } = req.body;
        tempUser = { username, email, mobile, password }

        //handle missing props in req.body
        const response = handleMissingProps(tempUser, res);
        if (response === true) return;


        const isExist = await Users.findOne({ email });
        if (isExist) {
            return res.status(400).json({
                message: 'User already exists'
            })
        };

        // generate otp
        const firstOtp = newOtp.generate()

        //send otp to admin
        const { message } = await sendOtpToAdmin(tempUser, firstOtp);

        return res.json({
            // message: 'otp sent to admin'
            message: message ? 'message send to admin' : 'something went wrong'
        })

    } catch (error) {
        next(error);
    }
}


// ========= register verify by admin ==========
const registerVerify = async (req, res, next) => {

    try {
        const { otp } = req.body;

        const isOtpVerify = newOtp.verify(otp);

        if (!isOtpVerify) {
            return res.status(400).json({
                message: 'invalid otp'
            })
        }

        //store user in DB
        const hashedPassword = await generatePasswordHash(tempUser.password);
        const user = { ...tempUser };
        user.password = hashedPassword;
        const dbResponse = await Users.create(user);
        res.status(200).json({
            message: 'user register successful'
        });
    } catch (error) {
        next(error)
    }


}




//=====login========
const login = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        //handle missing props in req.body
        const response = handleMissingProps({ email, password }, res);
        if (response) return;

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
        const accessToken = generateAccessToken(userData._id);
        res.json({ accessToken });

    } catch (error) {
        next(error);

    }
}




//====== home ========
const home = async (req, res, next) => {

    try {
        const userData = await Users.findById(req.userId).select('-password');
        res.json({
            data: userData
        });

    } catch (error) {
        next(error)
    }

}




module.exports = { register, registerVerify, login, home }