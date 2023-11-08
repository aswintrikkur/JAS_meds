const mongoose = require('mongoose');

//------ list of medicines --------
const MedicineSchema = mongoose.Schema({
    name: {
        type: String,
        // unique: true,
        required: true
    }
});

const Meds = mongoose.model('Meds', MedicineSchema)

// module.exports={Meds};

//--------- medicine details of customer ----------
// const medicineDetailSchema = new mongoose.Schema({
//     medicineName: {
//         type: String,
//         // unique: true,  //! bug: not checking uniqueness and required
//         required: true
//     },
//     quantity: Number, //!bug: not storing on DB
//     dueDate: String
// });
// const MedicineDetails = mongoose.model('MedicineDetails', medicineDetailSchema);
