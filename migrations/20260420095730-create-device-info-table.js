'use strict';

export async function up(queryInterface, Sequelize) {

  await queryInterface.createTable('device_infos', {
    
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },

    user_id: {
      type: Sequelize.INTEGER,
      allowNull: true,
      references: {
        model: 'users',  
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    },

    device: {
      type: Sequelize.STRING,
      allowNull: true
    },

    device_id: {
      type: Sequelize.STRING, 
      allowNull: true
    },

    fcm_token: {
      type: Sequelize.TEXT,
      allowNull: true,
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
  await queryInterface.dropTable('device_infos');
}