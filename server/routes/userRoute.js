const express = require('express');
const { signup, login, home, signupVerify } = require('../controllers/userController');
const { checkAuth } = require('../middlewares/checkAuth');
const router = express.Router();


router.post('/signup', signup);
router.post('/signup/verify', signupVerify );

router.post('/login', login);

router.get('/home', checkAuth, home);


module.exports = { userRoute: router }