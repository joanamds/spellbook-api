'use strict';

module.exports = (sequelize, DataTypes) => {
  const Spell = sequelize.define('Spell', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    spellName: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'spell_name'
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    },
    incantation: {
      type: DataTypes.STRING,
      allowNull: false
    },
    effect: {
      type: DataTypes.STRING,
      allowNull: false
    },
  });

  Spell.associate = (models) => {
    Spell.belongsToMany(models.Type, {
      through: 'SpellType',
      foreignKey: 'spell_id',
      otherKey: 'type_id',
      as: 'types'
    })
  }

  return Spell
}