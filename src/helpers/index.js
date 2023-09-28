const convertSpellFormat = (spell) => {
  const transformedSpell = {
    id: spell.id,
    spellName: spell.spellName,
    description: spell.description,
    incantation: spell.incantation,
    effect: spell.effect,
    type: spell.types.map(type => type.typeName)[0]
  };
  return transformedSpell;
}

module.exports = {
  convertSpellFormat
};