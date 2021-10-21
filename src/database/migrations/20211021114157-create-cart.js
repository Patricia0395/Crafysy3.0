'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Carts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.INTEGER,
        references : {
          model : {
            tableName: 'Users'
          },
          ket: 'id'
        }
      },
      productId: {
        type: Sequelize.INTEGER,
        references : {
          model : {
            tableName: 'Products'
          },
          ket: 'id'
        }
      },
      quantity: {
        type: Sequelize.INTEGER
      },
      orderId: {
        type: Sequelize.INTEGER,
        references : {
          model : {
            tableName: 'Orders'
          },
          ket: 'id'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        type: Sequelize.DATE,
        defaultValue : null
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Carts');
  }
};