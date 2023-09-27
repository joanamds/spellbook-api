'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('types', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      typeName: {
        type: Sequelize.STRING,
        allowNull: false,
        field: 'type_name'
      }
    }, {
      tableName: 'types'
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('types')
  }
};
