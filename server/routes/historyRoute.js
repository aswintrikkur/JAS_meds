const express = require('express');
const { Customers } = require('../models/customerModel');
const router = express.Router();


router.get('/', async(req, res) => {


    const dbResponse = await Customers.find(); 
    return res.json(dbResponse);
})


module.exports = { historyRouter: router };