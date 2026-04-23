'use strict';

/** @type {import('sequelize-cli').Migration} */
export async function up(queryInterface, Sequelize) {

  await queryInterface.addColumn('users', 'otp', {
      type: Sequelize.STRING,
      allowNull: true,
      after:'password'
  });



  await queryInterface.addColumn('users', 'otp_expire_at', {
    type: Sequelize.STRING,
    allowNull: true,
    after:'otp'
  });




}
export async function down(queryInterface, Sequelize) {
 
}
