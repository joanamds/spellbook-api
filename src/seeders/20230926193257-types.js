module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('types',
      [
        {
          id: 1,
          type_name: 'Charm',
        },
        {
          id: 2,
          type_name: 'Spell',
        }
      ], { timestamps: false });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('types', null, {});
  },
};
