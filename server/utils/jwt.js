const jwt = require('jsonwebtoken');

const generateAccessToken =(_id) => {

    const newToken = jwt.sign({_id}, process.env.JWT_SECRET_KEY)
    return newToken;
}


const verifyAccessToken = (accessToken)=>{

    return jwt.verify(accessToken,process.env.JWT_SECRET_KEY);
}

module.exports = { generateAccessToken, verifyAccessToken }


