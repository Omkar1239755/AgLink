'use strict';

/** @type {import('sequelize-cli').Migration} */
export async function up(queryInterface, Sequelize) {
  /**
   * Add altering commands here.
   *
   * Example:
  */
  await queryInterface.createTable('seller_shops', {

    
   id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },


    user_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      unique: true,
      references: {
        model: 'users',
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    },

    shop_image:{
      type: Sequelize.STRING,
      allowNull: false,

    },

   shop_name:{
    type: Sequelize.STRING,
    allowNull: false,
   },

   shopkeaper_name:{
    type: Sequelize.STRING,
    allowNull: false,
   },
    
   email:{
    type: Sequelize.STRING,
    allowNull: false,

   },

   phone_number:{
    type: Sequelize.STRING,
    allowNull: false,
   },

   shop_address:{
    type: Sequelize.STRING,
    allowNull: false,
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
