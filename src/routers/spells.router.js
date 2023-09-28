const express = require('express');
const { spellController } = require('../controllers');

const router = express.Router();

router.get('/', spellController.getAllSpells);
router.get('/:id', spellController.getSpellById);
router.delete('/:id', spellController.deleteSpell);

module.exports = router;