'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   
    return queryInterface.createTable('users', { 
      id: {
        primaryKey:true,
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
      },
      username: {
        unique: true,        
        type: Sequelize.STRING,
        allowNull: false,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      }, 
      email: {
        type: Sequelize.STRING,
      }, 
      adress: {
        type: Sequelize.STRING,
      }, 
      avatar: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      bio: {
        type: Sequelize.TEXT,
      },
      created_at:{
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      }
    });
    
  },

  down: (queryInterface, Sequelize) => {
   
    return queryInterface.dropTable('users');

  }
};
