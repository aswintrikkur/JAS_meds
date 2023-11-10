const { response } = require("express");
const { handleMissingProps } = require("../error/handleMissingProps");
const { Customers, MedicineDetails } = require("../models/customerModel");
const { Users } = require("../models/userModel");
// const { Medicines } = require("../models/medicineModel");


// get all customers details
const getCustomers=async (req,res,next)=>{
    try {
        const customer= await Customers.find(); //todo: Send specific user's customer list, not all
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

        const isIdExist = await Customers.findOne({customerId})
        if(isIdExist){
         throw Error('customer id already exist')
        }
        

        const customersRes = await Customers.create(temp);
        const usersRes = await Users.findByIdAndUpdate(req.userId,{
            $push:{ customers: customersRes._id }
        })
        res.json({
            _id: customersRes._id,
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

        // let data = req.body;

        console.log(req.file);
        // console.log(req.file.filename,'=====filename');


        console.log(req.body);

        // console.log(req.body);
        // const { medicineName, quantity, dueDate } = req.body;
        // const temp = { medicineName, quantity, dueDate };
        // const missing = handleMissingProps(temp, res);
        // if (missing) return;

        // const dbResponse = await MedicineDetails.create(temp);
        // res.json({
            //     message: `medicine added to list `
            // });

            
            // const dbResponse = await Customers.findByIdAndUpdate(id, {$push :{medList:temp}});
            // const cusRes = await Customers.findByIdAndUpdate(id, {medList:req.body});

            const cusRes = await Customers.findByIdAndUpdate(id, {medDetails:req.body});

            res.json({
                message: 'success'
            });
         

    } catch (error) {
        next(error);
    }
}



module.exports = { getCustomers , getCustomerDetails , postCustomerDetails, postMedDetails}