'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('admin', [
      {
        admin_name: 'Albus Percival Wulfric Brian Dumbledore',
        email: 'albuspwb.dumbledore@hogwarts.email.com',
        password: 'phoenixfeather',
      }
    ])
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('admin')
  }
};
