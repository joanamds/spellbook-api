const express = require('express');
const { spellController } = require('../controllers');

const router = express.Router();

router.get('/', spellController.getAllSpells);
router.delete('/:id', spellController.deleteSpell);

module.exports = router;