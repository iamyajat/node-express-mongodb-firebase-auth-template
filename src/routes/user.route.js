const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/auth');
const userController = require('../controllers/user.controller');

router.put('/update-profile', authMiddleware, userController.updateProfile);

module.exports = router;
