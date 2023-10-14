const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: { type: String, unique: true },
    email: { type: String, unique: true, require: true },
    mobile: { type: Number, unique: true, require: true },
    password: { type: String, unique: true, require: true }
})

module.exports = { Users : mongoose.model('Users', userSchema) };