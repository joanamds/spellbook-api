'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('students', [
      {
        student_name: 'Harry Potter',
        house: 'Gryffindor',
        email: 'harry@hogwarts.email.com',
        password: 'mischiefmanaged',
      },
      {
        student_name: 'Hermione Granger',
        house: 'Gryffindor',
        email: 'hermione@hogwarts.email.com',
        password: 'wingardiumleviosa',
      },
      {
        student_name: 'Ron Weasley',
        house: 'Gryffindor',
        email: 'ron@hogwarts.email.com',
        password: 'chocofrog',
      },
      {
        student_name: 'Draco Malfoy',
        house: 'Slytherin',
        email: 'draco@hogwarts.email.com',
        password: 'ihatemudbloods',
      },
      {
        student_name: 'Luna Lovegood',
        house: 'Ravenclaw',
        email: 'luna@hogwarts.email.com',
        password: 'nargles!',
      },
      {
        student_name: 'Cedric Diggory',
        house: 'Hufflepuff',
        email: 'cedric@hogwarts.email.com',
        password: 'triwizardchamp',
      },
      // Add more students as needed
    ], { timestamps: false});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('students', null, {});
  },
};

