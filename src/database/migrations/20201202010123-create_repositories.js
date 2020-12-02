'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   
    return queryInterface.createTable('repositories', { 
      id: {
        primaryKey:true,
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
      },
      owner:{
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'users' , key: 'id'},
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      description: {
        type: Sequelize.TEXT,
      },
      public: {
        type: Sequelize.BOOLEAN,
      },
      slug: {
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
   
    return queryInterface.dropTable('repositories');

  }
};
