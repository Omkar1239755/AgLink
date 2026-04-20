'use strict';

/** @type {import('sequelize-cli').Migration} */
export async function up(queryInterface, Sequelize) {
  /**
   * Add altering commands here.
   *
   * Example:
   * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
   */

await queryInterface.createTable('users',{


id:{
  type:Sequelize.INTEGER,
  autoIncrement: true,
  primaryKey: true
},
first_name:{
  type:Sequelize.STRING,
  allowNull:true
},
last_name:{
  type:Sequelize.STRING,
  allowNull:true
},
email:{
  type:Sequelize.STRING,
  allowNull:true
},
password:{
  type:Sequelize.STRING,
  allowNull:true
},
createdAt: {
  type: Sequelize.DATE,
  allowNull: false
},
updatedAt: {
  type: Sequelize.DATE,
  allowNull: false
}

});

}
export async function down(queryInterface, Sequelize) {
  /**
   * Add reverting commands here.
   *
   * Example:
   * await queryInterface.dropTable('users');
   */
}
