'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Team extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.player,{
        foreignKey:'teamID'
      });
    }
  }
  Team.init({
    Name:{
      type: DataTypes.STRING,
      allowNull: false,
      unique:true
    },
    location:{
      type: DataTypes.STRING,
      allowNull: false
    },
    owner:{
      type: DataTypes.STRING,
      allowNull: false
    },
    numberofwins: {
      type: DataTypes.STRING,
      allowNull: false
    },
    foundingyear: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    dresscolor: {
      type: DataTypes.STRING,
      allowNull: false
    },
    sponser:{
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false 
    },
    captain: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true 
    },
    headcoach: {
      type: DataTypes.STRING,
      allowNull: false ,
      unique: true 
    },
    battingcoach: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true 
    },
    bowlingcoach: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true 
    },
  }, {
    sequelize,
    modelName: 'Team',
  });
  return Team;
};