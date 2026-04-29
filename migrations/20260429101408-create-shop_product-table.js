'use strict';

/** @type {import('sequelize-cli').Migration} */
export async function up(queryInterface, Sequelize) {
  await queryInterface.createTable('shop_products', {

    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },

    shop_id:{
      type: Sequelize.INTEGER,
      allowNull: false
    },
    user_id:{
      type: Sequelize.INTEGER,
      allowNull: false

    },
    category_id:{
      type: Sequelize.INTEGER,
      allowNull: false

    },
    sub_category_id:{
      type: Sequelize.INTEGER,
      
      allowNull: false


    },
    variety_id:{
      type: Sequelize.INTEGER,
    
      allowNull: false



    },
    amount:{
      type: Sequelize.INTEGER,
    
      allowNull: false


    },
    quantity:{
      type: Sequelize.INTEGER,
      
      allowNull: false
    }
,

  
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
  



}
