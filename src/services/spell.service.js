const { Spell, Type } = require('../models');

const getAllSpells = async () => {
  const spells = await Spell.findAll({
    attributes: ['id', 'spellName', 'description', 'incantation', 'effect'],
    include: [
      {
        model: Type,
        as: 'types', 
        attributes: ['typeName'],
        through: {
          attributes: []
        },
      }
    ],
  });

  return spells
}

const deleteSpell =  async (id) => {
  await Spell.destroy({
    where: { id },
  })
}

module.exports = {
  getAllSpells,
  deleteSpell
}