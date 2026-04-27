'use strict';

/** @type {import('sequelize-cli').Migration} */
export async function up(queryInterface, Sequelize) {
  /**
   * Add altering commands here.
   *
   * Example:
  */
  await queryInterface.createTable('food_categories', {

    
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },

    food_category:Sequelize.STRING,

    image:Sequelize.STRING,

    status: {
      type: Sequelize.TINYINT,
      defaultValue: 1,   // by default active
      comment: '1 = active, 0 = inactive'
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
