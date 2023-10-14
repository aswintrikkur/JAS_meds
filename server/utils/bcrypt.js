const bcrypt = require('bcrypt');

const generatePasswordHash = async(password)=>{

    const SALT=10;    
    const hashedPassword= await bcrypt.hash(password,SALT);
    return hashedPassword;
}

const comparePasswordHash = async(password,hashedPassword)=>{

    return await bcrypt.compare(password,hashedPassword);
}

module.exports = {generatePasswordHash, comparePasswordHash}; 