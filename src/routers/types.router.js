const express = require('express');
const { typeController } = require('../controllers');
const { validateNewType } = require('../middlewares/validations');
const { validateToken } = require('../auth/validateJWT');

const router = express.Router();

router.post('/', validateNewType, typeController.createType);
router.get('/', validateToken, typeController.getAllTypes);
router.get('/:id', validateToken, typeController.getTypeById);

module.exports = router;