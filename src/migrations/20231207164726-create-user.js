'use strict';
/** @type {import('sequelize-cli').Migration} */
const {Enums} = require('../utils/common');
const {STUDENT,PROFESSIONAL} = Enums.USER_TYPE;
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      firstName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      lastNmae: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      bio: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      userType: {
        type: Sequelize.ENUM,
        values:[STUDENT,PROFESSIONAL],
        defaultValue:STUDENT,
        allowNull:false
      },
      experince: {
        type: Sequelize.INTEGER,
        allowNull: false,
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
    await queryInterface.dropTable('Users');
  }
};