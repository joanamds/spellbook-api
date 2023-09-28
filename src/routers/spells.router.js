const express = require('express');
const { spellController } = require('../controllers');
const { validateToken } = require('../auth/validateJWT');
const {
  validateSpellName,
  validateEffect,
  validateDescription,
  validateIncantation,
  validateType
} = require('../middlewares/validations');
const router = express.Router();

router.get('/', validateToken, spellController.getAllSpells);
router.post('/',
validateToken,
validateSpellName,
validateDescription,
validateIncantation,
validateEffect,
validateType, spellController.createSpell)
router.get('/:id', validateToken, spellController.getSpellById);
router.delete('/:id', validateToken, spellController.deleteSpell);

module.exports = router;