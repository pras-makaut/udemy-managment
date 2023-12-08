'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Course extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsToMany(models.User,{
        through:'user_courses',
        as:'user'
      })
    }
  }
  Course.init({
    name: {
      type:DataTypes.STRING,
      allowNull:false,
      unique:true
    },
    description:{
      type:DataTypes.STRING,
      allowNull:false,
    },
    price: {
      type:DataTypes.INTEGER,
      allowNull:false,
    },
    authorName:{
      type: DataTypes.STRING,
      allowNull:false
    },
    duration: {
      type:DataTypes.STRING,
      allowNull:false,
    }
  }, {
    sequelize,
    modelName: 'Course',
  });
  return Course;
};