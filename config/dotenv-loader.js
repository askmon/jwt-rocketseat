const { join } = require('path')
const dotenv = require('dotenv')

const DEV_ENVIRONMENTS = ['dev', 'development', 'local', 'debug']
const TEST_ENVIRONMENTS = ['test']

const load = nodeEnv => {
  if (DEV_ENVIRONMENTS.includes(nodeEnv)) {
    return dotenv.config()
  }
  if (TEST_ENVIRONMENTS.includes(nodeEnv)) {
    return dotenv.config({
      path: join(__dirname, 'test.env'),
    })
  }
}

module.exports = {
  load
}