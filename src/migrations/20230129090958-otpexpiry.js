"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn("Users", "otp_expiry", {
      type: Sequelize.DataTypes.DATE,
      required: true,
    });
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    //await queryInterface.dropTable('Users');
    await queryInterface.removeColumn("Users", "otp_expiry");
  },
};
