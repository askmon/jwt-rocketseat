require('./dotenv-loader').load(process.env.NODE_ENV)

const database = require('./database')
const server = require('./server')
const crypto = require('./crypto')

module.exports = {
  database,
  server,
  crypto,
}
