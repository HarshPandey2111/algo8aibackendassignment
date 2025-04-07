const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const { protect } = require('../middlewares/authMiddleware');

// Apply authentication middleware to all user routes
router.use(protect);

// Get all users
router.get('/', userController.getUsers);

// Get a specific user by ID
router.get('/:id', userController.getUser);

// Update a user by ID
router.put('/:id', userController.updateUser);

// Delete a user by ID
router.delete('/:id', userController.deleteUser);

module.exports = router;
