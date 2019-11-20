const models = require('../models')

const index = ctx =>
  models
    .authenticate()
    .then(() => (ctx.body = 'Node.JS do Zero ao Deploy: connectado com sucesso'))
    .catch(error => {
      ctx.status = 500
      ctx.body = `Node.JS do Zero ao Deploy: erro de conexão ${error.message}`
    })

const hello = ctx => {
  const name = ctx.params.name || 'World'
  ctx.body = `Hello ${name}!`
}

module.exports = {
  index,
  hello,
}
