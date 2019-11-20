const bcrypt = require('bcrypt')
const { crypto: config } = require('../../config')

const hash = value =>
  bcrypt
    .hash(value, config.hashSaltRounds)

module.exports = {
  hash,
}
