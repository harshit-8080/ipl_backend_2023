'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('players', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      firstName:{
        type: Sequelize.STRING,
        allowNull: false
      },
      lastName:{
        type: Sequelize.STRING,
        allowNull: false
      },
      contact:{
        type: Sequelize.TEXT,
        allowNull: false
      },
      email:{
        type: Sequelize.STRING,
        allowNull:false,
        unique:true
      },
      match:{
        type: Sequelize.INTEGER,
        allowNull:false
      },
      score:{
        type: Sequelize.INTEGER,
        allowNull:false
      },
      highestscore:{
        type: Sequelize.INTEGER,
        allowNull:false
      },
      playertype:{
        type: Sequelize.STRING,
        allowNull: false
      },
      captain: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      vicecaptain:{
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      nationalityCountry:{
        type: Sequelize.STRING,
        allowNull: false
      },
      bidprice: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      teamID:{
        type: Sequelize.INTEGER,
        onDelete:"CASCADE",
        onUpdate:"CASCADE",
        references:{
          model:"Teams",
          key:"id",
          as:"teamID"
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('players');
  }
};