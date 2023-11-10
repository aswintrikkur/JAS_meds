const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: { type: String, unique: true },
    email: { type: String, unique: true, require: true },
    mobile: { type: Number, unique: true, require: true },
    password: { type: String, unique: true, require: true },
    customers:[{
        type: mongoose.Schema.Types.ObjectId ,
        ref: 'Customers'
    }]
})

userSchema.virtual('essentials').get(function () {
    return ({_id:this._id, username: this.username, email: this.email, mobile: this.mobile })
});

module.exports = { Users: mongoose.model('Users', userSchema) };