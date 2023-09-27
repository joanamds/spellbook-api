const express = require('express');
const { loginController } = require('../controllers');

const { validateLoginBody } = require('../middlewares/validations');

const router = express.Router();

router.post('/', validateLoginBody, loginController.login);

module.exports = router;