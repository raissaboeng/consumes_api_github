'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   
    return queryInterface.createTable('tokens', { 
      id: {
        type:Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'users' , key: 'id'},
      },
      created_at:{
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at:{
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
    
  },

  down: (queryInterface, Sequelize) => {
   
    return queryInterface.dropTable('tokens');

  }
};
