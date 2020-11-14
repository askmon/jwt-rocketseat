module.exports = {
    up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('tokens', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        user_id: {
          allowNull: false,
          type: Sequelize.INTEGER,
        },
        token: {
          allowNull: false,
          type: Sequelize.STRING,
          unique: true,
        },
        valid: {
          allowNull: false,
          type: Sequelize.BOOLEAN,
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE,
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE,
        },
      })
    },
    down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable('tokens')
    },
  }