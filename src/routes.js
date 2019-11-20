const Router = require('koa-router')

const greetings = require('./handlers/greetings')

const router = new Router()

router.get('/hello/:name', greetings.hello)
router.get('/hello', greetings.hello)
router.get('/', greetings.index)

module.exports = router
