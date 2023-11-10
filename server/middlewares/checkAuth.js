const { verifyAccessToken } = require("../utils/jwt");

const checkAuth = (req, res, next) => {
    try {

        const token = req.headers.authorization;
        const isTokenValid = verifyAccessToken(token);

        // attaching _id on req.body
        if (isTokenValid) {
            req.userId = isTokenValid._id;
            next();

        }


    } catch (error) {


        next(error);
    }
}

module.exports = { checkAuth }