const auth = require('../services/auth')

const authenticate = async ctx => {
  const { email, password } = ctx.request.body
  ctx.body = {
    token: await auth.authenticate({ email, password }),
  }
}

module.exports = {
  authenticate,
}
