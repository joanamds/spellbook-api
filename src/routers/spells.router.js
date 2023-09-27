const express = require('express');
const { spellController } = require('../controllers');

const router = express.Router();

router.get('/', spellController.getAllSpells);

module.exports = router;