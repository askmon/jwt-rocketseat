const Router = require('koa-router')

// middlewares
const error = require('./middlewares/error')

// handlers
const greetings = require('./handlers/greetings')
const users = require('./handlers/users')
const auth = require('./handlers/auth')

const router = new Router()

router.use(error)

router.get('/hello/:name', greetings.hello)
router.get('/hello', greetings.hello)
router.get('/', greetings.index)

router.get('/users', users.getAllUsers)
router.post('/users', users.createUser)

router.post('/auth', auth.authenticate)

module.exports = router
