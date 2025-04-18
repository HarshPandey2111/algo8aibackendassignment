const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// Render signup page
router.get('/signup', (req, res) => {
  res.render('signup');
});

// Render login page
router.get('/login', (req, res) => {
  res.render('login');
});

// User signup
router.post('/signup', authController.signup);

// User login
router.post('/login', authController.login);

// User logout
router.post('/logout', authController.logout);

module.exports = router;
