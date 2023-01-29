'use strict';
const {
  Model
} = require('sequelize');
const bcrypt = require("bcrypt");

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    otp: {
      type: DataTypes.INTEGER,
      required: true,
    },
    verified : {
      type: DataTypes.BOOLEAN,
      required: true,
    },
    otp_expiry:{
      type:DataTypes.DATE,
      required:true
  },
  }, {
    sequelize,
    modelName: 'User',
  });

  User.beforeCreate(async (user) => {

    const salt = bcrypt.genSaltSync(8);
    const hash = bcrypt.hashSync(user.password, salt);
    // console.log(hash);
    user.password = hash;

  });

  return User;
};