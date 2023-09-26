module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('spells', [
      {
        id: 1,
        admin_id: 1,
        spell_name: 'Expelliarmus',
        description: 'A disarming charm that forces the target to release whatever they are holding.',
        incantation: 'Expelliarmus!',
        effect: 'Disarming',
      },
      {
        id: 2,
        admin_id: 1,
        spell_name: 'Lumos',
        description: 'A charm that produces light from the tip of the caster\'s wand.',
        incantation: 'Lumos!',
        effect: 'Illumination',
      },
      {
        id: 3,
        admin_id: 1,
        spell_name: 'Alohomora',
        description: 'A spell used to unlock doors and objects.',
        incantation: 'Alohomora!',
        effect: 'Unlocking',
      },
      {
        id: 4,
        admin_id: 1,
        spell_name: 'Expecto Patronum',
        description: 'A defensive charm that conjures a Patronus to ward off Dementors and other dark creatures.',
        incantation: 'Expecto Patronum!',
        effect: 'Dementor Repelling',
      },
    ], {
      timestamps: false,
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('spells', null, {});
  },
};