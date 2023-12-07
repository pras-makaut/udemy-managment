'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Courses', [
      {
        name:'c++',
        description:'A vey good course for beginners',
        price:2000,
        authorName:'Prashant Ranjan',
        duration:'11h 23m',
        createdAt:new Date(),
        updatedAt : new Date()
      },
      {
        name:'JS',
        description:'A vey good course for beginners and experieced folks',
        price:12000,
        authorName:'Ashish Ranjan',
        duration:'70h 23m',
        createdAt:new Date(),
        updatedAt : new Date()
      },
      {
        name:'JAVA',
        description:'A vey good course for beginners and also it help to start journey to your development',
        price:90000,
        authorName:'Prashant Ranjan',
        duration:'90h 23m',
        createdAt:new Date(),
        updatedAt : new Date()
      },
      {
        name:'JAVA ADVANCE',
        description:'A vey good course for medium level folks and also it also cover development',
        price:95000,
        authorName:'Prashant Ranjan',
        duration:'110h 23m',
        createdAt:new Date(),
        updatedAt : new Date()
      },
      {
        name:'NODEJS',
        description:'A vey good course for beginners and experieced folks',
        price:9000,
        authorName:'Ashish Ranjan',
        duration:'45h 23m',
        createdAt:new Date(),
        updatedAt : new Date()
      },

    ], {});
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Courses', null, {});
  }
};
