module.exports = {
  up: (queryInterface, _Sequelize) =>
    queryInterface.renameTable('Users', 'users'),
  down: (queryInterface, _Sequelize) =>
    queryInterface.renameTable('users', 'Users'),
}
