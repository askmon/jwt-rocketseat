module.exports = {
  up: (queryInterface, _Sequelize) =>
    queryInterface.addIndex('users', ['email'], { unique: true, name: 'users_email_unique' }),

  down: (queryInterface, _Sequelize) =>
    queryInterface.removeIndex('users', 'users_email_unique'),
}
