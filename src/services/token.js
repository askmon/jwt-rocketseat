const jwt = require('jsonwebtoken')
const { crypto: config } = require('../../config')

const sign = payload =>
  jwt.sign(payload, config.jwt.secret)

module.exports = {
  sign,
}
