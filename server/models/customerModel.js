const mongoose = require('mongoose');

//--------- medicine details of customer ----------
const medicineDetailSchema = new mongoose.Schema({
    medicineName: {
        type: String,
        unique: true,  //! bug: not checking uniqueness and required
        required: true
    },
    quantity: Number, //!bug: not storing on DB
    dueDate: String
});
const MedicineDetails = mongoose.model('MedicineDetails', medicineDetailSchema);


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
        // medList: [{
        //     type: mongoose.Schema.Types.ObjectId,
        //     ref: 'MedcineDetails'
        // }]
        medList: medicineDetailSchema
    }
);
const Customers = mongoose.model('Customers', customerSchema)



module.exports = { Customers, MedicineDetails }