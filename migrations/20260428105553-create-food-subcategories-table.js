'use strict';

/** @type {import('sequelize-cli').Migration} */
export async function up(queryInterface, Sequelize) {


await queryInterface.createTable('food-subcategories', {

  id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },

  food_category_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'food_categories', // parent table name
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
  }
  ,
  name:{
  type:Sequelize.STRING,
  allowNull:true
  },

  image:{
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

})
}
export async function down(queryInterface, Sequelize) {
  await queryInterface.dropTable('food_subcategories');
}
