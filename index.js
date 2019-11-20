const Koa = require('koa')
const Router = require('koa-router')

const app = new Koa()
const router = new Router()

const hello = ctx => {
  const name = ctx.params.name || 'World'
  ctx.body = `Hello ${name}`
}

router.get('/hello/:name', hello)
router.get('/hello', hello)
router.get('/', ctx => (ctx.body = 'Node.JS do Zero ao Deploy'))

app.use(router.routes())

const port = process.env.PORT || 3000

app.listen(port)
  .on('listening', () => console.log(`Listening on port ${port}`))
