const express = require('express');
const { register, login, home } = require('../controllers/userController');
const { checkAuth } = require('../middlewares/checkAuth');
const router = express.Router();


router.post('/register', register);
router.post('/login', login);
router.get('/home', checkAuth, home);


module.exports = { userRoute: router }