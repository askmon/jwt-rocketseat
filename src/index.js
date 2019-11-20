const Koa = require('koa')

const router = require('./routes')
const config = require('../config')

const app = new Koa()

app.use(router.routes())

const port = config.server.port

app.listen(port)
  .on('listening', () => console.log(`Listening on port ${port}`))
