const jwt = require('jsonwebtoken')
const { crypto: config } = require('../../config')

const sign = payload =>
  jwt.sign(payload, config.jwt.secret)

const verify = token => new Promise((resolve, reject) =>
  jwt.verify(
    token,
    config.jwt.secret,
    (error, data) => error ? reject(error) : resolve(data)
  )
)

module.exports = {
  sign,
  verify,
}
