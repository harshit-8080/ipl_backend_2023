'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('Users',  'verified', {
      type: Boolean,
      required: true,
    });
    await queryInterface.addColumn('Users',  'otp', {
      type: Number,
      required: true,
    });
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    //await queryInterface.dropTable('Users');
    await queryInterface.removeColumn('Users',  'verified', {
      type: Boolean,
      required: true,
    });
  }
};
