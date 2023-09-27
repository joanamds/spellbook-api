const express = require('express');
const { userController } = require('../controllers');

const router = express.Router();

router.post('/', userController.createUser);
router.get('/', userController.getUsers);
router.get('/:id', userController.getUserById);
router.delete('/:id', userController.deleteUser)

module.exports = router;
