const Router = require('koa-router')

const greetings = require('./handlers/greetings')
const users = require('./handlers/users')

const router = new Router()

router.get('/hello/:name', greetings.hello)
router.get('/hello', greetings.hello)
router.get('/', greetings.index)

router.get('/users', users.getAllUsers)
router.post('/users', users.createUser)

module.exports = router
