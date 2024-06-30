const path = require('path');
const express = require('express');
const router = express.Router();


// const authController = require('../controller/authController');
const ordersController = require('../controller/ordersController');



router.post('/submitorder',ordersController.submitOrder)
// router.post('/customerlogin', custController.logIn)




module.exports = router;
