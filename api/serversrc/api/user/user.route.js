const express = require('express');
const router = express.Router();

// Require controller modules.
const userController = require('./user.controller');

router.get('/', userController.getUserList);
router.post('/add', userController.postUser);
router.put('/update/:userId', userController.editUser);
router.delete('/delete/:userId', userController.deleteUser);

module.exports = router;