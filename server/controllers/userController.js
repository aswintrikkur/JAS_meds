const { Users } = require("../models/userModel");
const { generatePasswordHash, comparePasswordHash } = require("../utils/bcrypt");
const { handleMissingProps } = require("../error/handleMissingProps");
const { generateAccessToken, verifyAccessToken } = require("../utils/jwt");
const { sendOtpToAdmin, OTP } = require("../utils/twilio");


// global variables
const newOtp = new OTP();
let tempUser;


//======= signup =========
const signup = async (req, res, next) => {
    try {
        const { username, email, mobile, password } = req.body;
        tempUser = { username, email, mobile, password }

        //handle missing props in req.body
        const missing = handleMissingProps(tempUser, res);
        if (missing === true) return;


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


// ========= signup verify by admin ==========
const signupVerify = async (req, res, next) => {

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
        const missing = handleMissingProps({ email, password }, res);
        if (missing) return;

        const userData = await Users.findOne({ email });
        if (!userData) {
            return res.status(400).json({
                message: 'user not found.'
            })
        };

        //compare password
        const isPasswordValid = await comparePasswordHash(password, userData.password)
        if (isPasswordValid) {

            // return res.json(userData.essentials);
            // //generate accesstoken and send to client  
            const accessToken = generateAccessToken(userData._id);
            return res.status(200).json({ user: userData.essentials, accessToken });
        }

        return res.status(400).json({
            message: 'invalid email or password'
        });

    } catch (error) {
        next(error);

    }
}



//=========== verify token ===============
const verifyToken = async (req, res, next) => {
    try {

        const { token } = req.params;
        const validToken = verifyAccessToken(token);
        res.json({
            message: 'success'
        })

    } catch (error) {

        next(error)
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




module.exports = { signup, signupVerify, login, verifyToken, home }