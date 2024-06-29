const path = require('path');
const express = require('express');
const router = express.Router();


// const authController = require('../controller/authController');
const custController = require('../controller/custController');


// // router.get('/', adminController.getAdmin);
router.post('/customersignup',custController.signUp)
router.post('/customerlogin', custController.logIn)




module.exports = router;
