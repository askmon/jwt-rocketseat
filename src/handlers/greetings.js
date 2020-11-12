const models = require('../models')

const index = ctx =>
  models
    .authenticate()
    .then(() => (ctx.body = 'JWT exemplo: conectado com sucesso'))

    /* eslint-disable prefer-promise-reject-errors */
    .catch(error => Promise.reject({
      status: 500,
      message: `JWT exemplo: erro de conexão ${error.message}`,
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
