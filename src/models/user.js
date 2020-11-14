module.exports = (sequelize, DataTypes) => {
  const schema = {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    role: DataTypes.STRING
  }
  const modelOptions = {
    tableName: 'users',
  }
  const User = sequelize.define('User', schema, modelOptions)

  User.associate = models => {
    // associations can be defined here
  }
  return User
}
