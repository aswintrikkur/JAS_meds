const mongoose = require('mongoose');



// --------- customer details ----------
const customerSchema = new mongoose.Schema(
    {
        customerId: { type: Number, unique: true },
        customerName: { type: String },
        address: { type: String },
        mobile: { type: Number },
        date: { type: String },
        doctorName: String,
        staffName: String,
        medDetails: {
            medList: [{
                medicineName: String,
                quantity: Number,
                dueDate: String
            }],
            nrxDrugs: String,
            img: Object,
            comments: String,
            lastDue: String

        },
    }
);
const Customers = mongoose.model('Customers', customerSchema)



module.exports = { Customers }