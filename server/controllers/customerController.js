const { handleMissingProps } = require("../error/handleMissingProps");
const { Customers, MedicineDetails } = require("../models/customerModel");
// const { Medicines } = require("../models/medicineModel");


// get all customers details
const getCustomers=async (req,res,next)=>{
    try {
        const customer= await Customers.find();
        res.json({customer})

    } catch (error) {
        next(error);
    }
}

// get individual customer details
const getCustomerDetails=async (req,res,next)=>{
    try {
        const {id}= req.params
        const customer= await Customers.findOne({_id:id});

        res.json({customer})

    } catch (error) {
        next(error);
    }
}


// add individual customerDetails
const postCustomerDetails = async (req, res, next) => {
    try {
        const { customerId, customerName, address, mobile, date, doctorName, staffName } = req.body;
        const temp = { customerId, customerName, address, mobile, date, doctorName, staffName };
        const missing = handleMissingProps(temp, res);
        if (missing) return;

        const dbResponse = await Customers.create(temp);
        res.json({
            message: 'customer data saved'
        });
    } catch (error) {
        next(error);
    }
}

// add individual customer's medicine Details
const postMedDetails = async (req, res, next) => {
    try {
        const {id}=req.params;
        const { medicineName, quantity, dueDate } = req.body;
        const temp = { medicineName, quantity, dueDate };
        const missing = handleMissingProps(temp, res);
        if (missing) return;

        // const dbResponse = await MedicineDetails.create(temp);
        // res.json({
            //     message: `medicine added to list `
            // });
            
            const dbResponse = await Customers.findByIdAndUpdate(id, {medList:temp})
         

    } catch (error) {
        next(error);
    }
}



module.exports = { getCustomers , getCustomerDetails , postCustomerDetails, postMedDetails}