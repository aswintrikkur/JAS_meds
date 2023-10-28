const express = require('express');
const router = express.Router();
const { getCustomerDetails, postCustomerDetails, postMedDetails, getCustomers }
    = require('../controllers/customerController');


// get all customer's details
router.get('/', getCustomers);

// get individual customer's details
router.get('/details/:id', getCustomerDetails);

//add individual customer's details
router.post('/details', postCustomerDetails);

// add individual customer's medDetails
router.put('/medDetails/:id', postMedDetails);


module.exports = { customerRoute: router };