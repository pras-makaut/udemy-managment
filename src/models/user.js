'use strict';
const {
  Model
} = require('sequelize');
const {Enums} = require('../utils/common');
const {STUDENT,PROFESSIONAL} = Enums.USER_TYPE;
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
    firstName: {
      type:DataTypes.STRING,
      allowNull:false
    },
    lastNmae:{
      type:DataTypes.STRING,
      allowNull:false
    },
    bio: {
      type:DataTypes.STRING,
      allowNull:false
    },
    userType: {
      type:DataTypes.ENUM,
      values:[STUDENT,PROFESSIONAL],
      defaultValue:STUDENT,
      allowNull:false
    },
    experince: {
      type:DataTypes.INTEGER,
      allowNull:false
    }
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};