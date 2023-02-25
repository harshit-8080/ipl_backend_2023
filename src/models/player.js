'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class player extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Team,{
        foreignKey:'teamID',
        onDelete:'CASCADE',
        onUpdate:"CASCADE"
      });
    }
  }
  player.init({
    firstName:{
      type: DataTypes.STRING,
      allowNull: false
    },
    lastName:{
      type: DataTypes.STRING,
      allowNull: false
    },
    contact:{
      type: DataTypes.TEXT,
      allowNull: false
    },
    email:{
      type: DataTypes.STRING,
      allowNull:false,
      unique: true
    },
    match:{
      type: DataTypes.INTEGER,
      allowNull:false
    },
    score:{
      type: DataTypes.INTEGER,
      allowNull:false
    },
    highestscore:{
      type: DataTypes.INTEGER,
      allowNull:false
    },
    playertype:{
      type: DataTypes.STRING,
      allowNull: false
    },
    captain: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    vicecaptain:{
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    nationalityCountry:{
      type: DataTypes.STRING,
      allowNull: false
    },
    bidprice: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    teamID:{
      type: DataTypes.INTEGER,
      allowNull: false
    } 
  }, {
    sequelize,
    modelName: 'player',
  });
  return player;
};