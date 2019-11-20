const models = require('../models')

const index = ctx =>
  models
    .authenticate()
    .then(() => (ctx.body = 'Node.JS do Zero ao Deploy: connectado com sucesso'))
    // illustration purposes only
    // for production-ready code, use error codes/types and a catalog (maps codes -> responses)

    /* eslint-disable prefer-promise-reject-errors */
    .catch(error => Promise.reject({
      status: 500,
      message: `Node.JS do Zero ao Deploy: erro de conexão ${error.message}`,
      code: 'DATABASE_CONNECTION_ERROR',
    }))

const hello = ctx => {
  const name = ctx.params.name || 'World'
  ctx.body = `Hello ${name}!`
}

module.exports = {
  index,
  hello,
}
