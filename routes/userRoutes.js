const express = require('express');
const User = require('../models/user.js');
const userController = require('../controllers/userController.js');
const router = express.Router();

router.post('/register', userController.registerUser);
router.post('/login', userController.loginUser);
router.get('/profile/:id', userController.getUserProfile); // Temporaire sans auth
router.put('/profile/:id', userController.updateUserProfile);
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