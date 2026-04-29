'use strict';

/** @type {import('sequelize-cli').Migration} */
export async function up(queryInterface, Sequelize) {
  await queryInterface.createTable('food-sub-subcategories', {

    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },

    food_sub_category_id: {   // 🔥 parent ka FK
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'food-subcategories',
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    },

    name: {
      type: Sequelize.STRING,
      allowNull: false
    },

    image: {
      type: Sequelize.STRING,
      allowNull: true
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
  



}
