const express = require('express');
const { signup, login, home, signupVerify, verifyToken } = require('../controllers/userController');
const { checkAuth } = require('../middlewares/checkAuth');
const router = express.Router();


router.post('/signup', signup);
router.post('/signup/verify', signupVerify );

router.post('/login', login);

router.get('/verifyToken/:token',verifyToken);

router.get('/home', checkAuth, home);


module.exports = { userRoute: router }