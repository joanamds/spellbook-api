'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('spells_types', {
      spellId: {
        primaryKey: true,
        type: Sequelize.INTEGER,
        field: 'spell_id',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        references: {
          model: 'spells',
          key: 'id'
        }
      },
      typeId: {
        primaryKey: true,
        type: Sequelize.INTEGER,
        field: 'type_id',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        references: {
          model: 'types',
          key: 'id'
        }
      }
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('spells_types')
  }
};
