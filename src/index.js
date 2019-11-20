const Koa = require('koa')
const Router = require('koa-router')

const config = require('../config')
const models = require('./models')

const app = new Koa()
const router = new Router()

const hello = ctx => {
  const name = ctx.params.name || 'World'
  ctx.body = `Hello ${name}`
}

const index = ctx =>
  models
    .authenticate()
    .then(() => (ctx.body = 'Node.JS do Zero ao Deploy: connectado com sucesso'))
    .catch(error => {
      ctx.status = 500
      ctx.body = `Node.JS do Zero ao Deploy: erro de conexão ${error.message}`
    })

router.get('/hello/:name', hello)
router.get('/hello', hello)

router.get('/', index)

app.use(router.routes())

const port = config.server.port

app.listen(port)
  .on('listening', () => console.log(`Listening on port ${port}`))
