// userRoutes.js
const express = require('express');
const UserController = require('../controller/UserController'); // Adjust the path as needed
const router = express.Router();

router.get('/', UserController.getAllUsers);
router.get('/:userId', UserController.getUserById);
router.post('/register', UserController.registerUser);
router.post('/login', UserController.loginUser);
router.put('/update/:userId', UserController.updateUser);
router.delete('/delete/:userId', UserController.deleteUser);

module.exports = router;
