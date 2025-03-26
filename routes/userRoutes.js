const express = require('express');
const User = require('../models/user.js');
const router = express.Router();
const { 
    registerUser, 
    loginUser, 
    getUserProfile, 
    updateUserProfile 
} = require('../controllers/userController.js');
const { protect } = require('../middleware/AuthentificationHandler.js');

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/profile', protect, getUserProfile);
router.put('/profile', protect, updateUserProfile);

module.exports = router;