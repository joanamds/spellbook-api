'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('users', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      userName: {
        type: Sequelize.STRING,
        allowNull: false,
        field: 'user_name'
      },
      house: {
        type: Sequelize.STRING,
        allowNull: false
      },
      email: {
          type: Sequelize.STRING,
          allowNull: false
      },
      password: {
          type: Sequelize.STRING,
          allowNull: false
      },
      role: {
        type: Sequelize.STRING,
        allowNull: false
      }
    }, {
      tableName: 'users'
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('users')
  }
};
