const express = require('express');
const router = express.Router();
const {loginUser, registerUser} = require('../controllers/authController');

// Creating a User
router.post("/register", registerUser);

//Login a User 
router.post("/login", loginUser);


module.exports = router;