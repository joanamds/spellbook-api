const { Spell, Type } = require('../models');

const getAllSpells = async () => {
  const spells = await Spell.findAll({
    include: [
      { model: Type, as: 'types', 
      through: {
        attributes: ['spellId', 'typeId'],
        exclude: ['id', 'SpellType'] } },
    ],
  });

  return spells
}

module.exports = {
  getAllSpells
}