'use strict';

module.exports = (sequelize, DataTypes) => {
  const SpellType = sequelize.define('SpellType', {
    spellId: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      field: 'spell_id',
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
      references: {
        model: 'Spells',
        key: 'id'
      }
    },
    typeId: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      field: 'type_id',
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
      references: {
        model: 'Types',
        key: 'id'
      }
    }
  }, {
    tableName: 'spells_types' 
  });

  SpellType.associate = (models) => {
    models.Type.belongsToMany(models.Spell, {
      foreignKey: 'typeId',
      through: SpellType,
      as: 'spell'
    });

    models.Spell.belongsToMany(models.Type, {
      foreignKey: 'spellId',
      through: SpellType,
      as: 'type'
    });
  };

  return SpellType;
};