const Router = require('koa-router')

// middlewares
const error = require('./middlewares/error')
const authenticated = require('./middlewares/auth')

// handlers
const users = require('./handlers/users')
const auth = require('./handlers/auth')

const router = new Router()

router.use(error)

router.get('/users', users.getAllUsers)
router.post('/users', authenticated, users.createUser)

router.post('/auth', auth.authenticate)

module.exports = router
