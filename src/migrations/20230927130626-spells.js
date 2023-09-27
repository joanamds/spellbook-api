'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('spells', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      spellName: {
          type: Sequelize.STRING,
          allowNull: false,
          field: 'spell_name'
      },
      description: {
          type: Sequelize.STRING,
          allowNull: false
      },
      incantation: {
          type: Sequelize.STRING,
          allowNull: false
      },
      effect: {
          type: Sequelize.STRING,
          allowNull: false
      },
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('spells')
  }
};
