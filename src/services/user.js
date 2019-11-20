const bcrypt = require('bcrypt')
const R = require('ramda')

const { User } = require('../models')

const getUsers = () => User.findAll({}).then(R.map(user => user.get({ plain: true }))).then(R.map(R.omit(['password'])))
const createUser = user => bcrypt.hash(user.password, 10).then(hash => User.create({
  ...user,
  password: hash,
}))

module.exports = {
  getUsers,
  createUser,
}
