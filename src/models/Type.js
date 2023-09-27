'use strict';

module.exports = (sequelize, DataTypes) => {
  const Type = sequelize.define('Type', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    typeName: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'type_name'
    }
  }, {
    underscored: true,
    tableName: 'types'
  });

  Type.associate = (models) => {
    Type.belongsToMany(models.Spell, {
      through: 'SpellType',
      foreignKey: 'type_id',
      otherKey: 'spell_id',
      as: 'spells'
    })
  }

  return Type
}