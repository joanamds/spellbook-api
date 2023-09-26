module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('spells_types',
      [
        {
          spell_id: 1,
          type_id: 1,
        },
        {
          spell_id: 2,
          type_id: 1,
        },
        {
          spell_id: 3,
          type_id: 2,
        },
        {
          spell_id: 4,
          type_id: 1,
        },
      ], { timestamps: false });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('spells_types', null, {});
  },
};
