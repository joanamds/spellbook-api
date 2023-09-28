const express = require('express');
const { userController } = require('../controllers');
const {
  validateUserName,
  validateEmail,
  validatePassword,
  validateHouse,
  validateRole
} = require('../middlewares/validations')
const router = express.Router();

router.post('/',
validateUserName,
validateHouse,
validateEmail,
validatePassword,
validateRole,
userController.createUser);
router.get('/', userController.getUsers);
router.get('/:id', userController.getUserById);
router.delete('/:id', userController.deleteUser)

module.exports = router;
