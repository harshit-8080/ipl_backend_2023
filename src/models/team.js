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
    }
  }
  Team.init({
    name: {
      type:DataTypes.STRING,
      allowNull:false
    },
    city:{
      type:DataTypes.STRING,
      allowNull:false
    },
    teamColour: {
      type:DataTypes.STRING
    },
    owner:{
      type:DataTypes.STRING,
      allowNull:false
    },
    head: {
      type:DataTypes.STRING,
      allowNull:false
    },
  }, {
    sequelize,
    modelName: 'Team',
  });
  return Team;
};