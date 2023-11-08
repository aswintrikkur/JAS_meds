const mongoose = require("mongoose");
require('dotenv').config()
const MONGO_URI = process.env.MONGO_URI;

const connectDB = async () => {
    try {
        const { connection } = await mongoose.connect(MONGO_URI, {
            useNewUrlParser: true, useUnifiedTopology: true, autoIndex: true,
        });
        console.log('dataBase connected :', connection.host);
    } catch (error) {
        console.log(error);
    }

}

module.exports = connectDB;