'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('users', [
      {
        user_name: 'Harry Potter',
        house: 'Gryffindor',
        email: 'harry@hogwarts.email.com',
        password: 'mischiefmanaged',
        role: 'student'
      },
      {
        user_name: 'Hermione Granger',
        house: 'Gryffindor',
        email: 'hermione@hogwarts.email.com',
        password: 'wingardiumleviosa',
        role: 'student'
      },
      {
        user_name: 'Ron Weasley',
        house: 'Gryffindor',
        email: 'ron@hogwarts.email.com',
        password: 'chocofrog',
        role: 'student'
      },
      {
        user_name: 'Draco Malfoy',
        house: 'Slytherin',
        email: 'draco@hogwarts.email.com',
        password: 'ihatemudbloods',
        role: 'student'
      },
      {
        user_name: 'Luna Lovegood',
        house: 'Ravenclaw',
        email: 'luna@hogwarts.email.com',
        password: 'nargles!',
        role: 'student'
      },
      {
        user_name: 'Cedric Diggory',
        house: 'Hufflepuff',
        email: 'cedric@hogwarts.email.com',
        password: 'triwizardchamp',
        role: 'student'
      },
      {
        user_name: 'Albus Percival Wulfric Brian Dumbledore',
        house: 'Gryffindor',
        email: 'albuspwb.dumbledore@hogwarts.email.com',
        password: 'phoenixfeather',
        role: 'admin'
      }
      // Add more users as needed
    ], { timestamps: false});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users', null, {});
  },
};

