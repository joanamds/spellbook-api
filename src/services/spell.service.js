const { Spell, Type } = require('../models');
const { convertSpellFormat } = require('../helpers');

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

  const spellsFormatted = spells.map((spell) => {
    return convertSpellFormat(spell)
  });

  return { status: 200, message: spellsFormatted }
}

const getSpellById = async (id) => {
  const spell = await Spell.findOne({
    where: { id },
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
    ]
    }
  );
  
  if(!spell) return { status: 404, message: 'Spell not found!'}
  const spellFormatted = convertSpellFormat(spell);
  return { status: 200, message: spellFormatted };
}

const createSpell = async(spell) => {
  const { spellName, description, incantation, effect, types } = spell;
  const newSpell = await Spell.create({ spellName, description, incantation, effect });
  await newSpell.setTypes(types);
  return { status: 201, message: newSpell };
}

const deleteSpell =  async (id) => {
  await Spell.destroy({
    where: { id },
  })
}

module.exports = {
  getAllSpells,
  deleteSpell,
  getSpellById,
  createSpell
}