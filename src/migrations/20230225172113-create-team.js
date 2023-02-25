'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Teams', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      Name:{
        type: Sequelize.STRING,
        allowNull: false,
        unique:true
      },
      location:{
        type: Sequelize.STRING,
        allowNull: false
      },
      owner: {
        type: Sequelize.STRING,
        allowNull: false
      },
      numberofwins: {
        type: Sequelize.STRING,
        allowNull: false
      },
      foundingyear: {
        type: Sequelize.INTEGER,
        allowNull: false 
      },
      dresscolor: {
        type: Sequelize.STRING,
        allowNull: false
      },
      sponser:{
        type: Sequelize.ARRAY(Sequelize.STRING),
        allowNull: false 
      },
      captain: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true 
      },
      headcoach: {
        type: Sequelize.STRING,
        allowNull: false ,
        unique: true 
      },
      battingcoach: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true 
      },
      bowlingcoach: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true 
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
    await queryInterface.dropTable('Teams');
  }
};