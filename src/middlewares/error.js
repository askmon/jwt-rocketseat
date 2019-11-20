const handleError = ctx => error => {
  console.error(error)
  const { status = 500, code = 'INTERNAL_SERVER_ERROR', message } = error
  ctx.status = status
  ctx.body = {
    statusCode: status,
    message,
    code,
  }
}

module.exports = (ctx, next) =>
  next()
    .catch(handleError(ctx))
