const mongoose = require('mongoose');

//------ list of medicines --------
const MedicineSchema = mongoose.Schema({
    name: {
        type: String,
        unique: true,
        required: true
    }
});

const Meds = mongoose.model('Meds', MedicineSchema)

module.exports={Meds};

