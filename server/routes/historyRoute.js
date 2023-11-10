const express = require('express');
const { Customers } = require('../models/customerModel');
const { Users } = require('../models/userModel');
const router = express.Router();


router.get('/', async(req, res) => {

    const {userId} = req;

    const userRes = await Users.findById(userId).select("customers").populate("customers");     
    return res.json(userRes);
})


module.exports = { historyRouter: router };