'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [
      {
        firstName:'Prashant',
        lastNmae:'Ranjan',
        bio:'A good coder and developer',
        userType:'student',
        experince:2,
        createdAt:new Date(),
        updatedAt : new Date()
      },
      {
        firstName:'Aashish',
        lastNmae:'Ranjan',
        bio:'A good developer',
        userType:'student',
        experince:4,
        createdAt:new Date(),
        updatedAt : new Date()
      },
      {
        firstName:'Karn',
        lastNmae:'Kumar',
        bio:'Full stack developer',
        userType:'student',
        experince:5,
        createdAt:new Date(),
        updatedAt : new Date()
      },
      {
        firstName:'Ankit',
        lastNmae:'Kumar',
        bio:'Full stack developer',
        userType:'proffesional',
        experince:0,
        createdAt:new Date(),
        updatedAt : new Date()
      },
      {
        firstName:'Shivam',
        lastNmae:'Kumar',
        bio:'Great frontend developer',
        userType:'proffesional',
        experince:4,
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
    await queryInterface.bulkDelete('Users', null, {});
  }
};
