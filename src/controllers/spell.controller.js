const { spellService } = require('../services');

const getAllSpells = async (req, res) => {
  const spells = await spellService.getAllSpells();
  return res.status(200).json(spells)
}

module.exports = {
  getAllSpells
}