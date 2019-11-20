const { verify } = require('../services/token')

const extractToken = ctx => {
  const authorization = ctx.headers.authorization || ''
  return authorization.replace('Bearer ', '')
}

const handleError = error => {
  console.error('Failed to verify token', error)
  // illustration purposes only
  // for production-ready code, use error codes/types and a catalog (maps codes -> responses)

  /* eslint-disable prefer-promise-reject-errors */
  return Promise.reject({
    status: 401,
    message: 'Invalid authentication token',
    code: 'UNAUTHENTICATED',
  })
}

module.exports = (ctx, next) => {
  const token = extractToken(ctx)
  return verify(token)
    // in case we need the information inside the token:
    // set it in ctx.state so it is available to the next middlewares/handlers
    // .then(({ id }) => (ctx.state.user = id))
    .catch(handleError)
    .then(next)
}
