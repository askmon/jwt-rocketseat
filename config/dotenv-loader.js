const { join } = require('path')

const DEV_ENVIRONMENTS = ['dev', 'development', 'local', 'debug']
const TEST_ENVIRONMENTS = ['test']
const DOTENV_ENVIRONMENTS = [...DEV_ENVIRONMENTS, ...TEST_ENVIRONMENTS]

const loadDotEnv = nodeEnv => {
  const dotenv = require('dotenv')

  if (DEV_ENVIRONMENTS.includes(nodeEnv)) {
    return dotenv.config()
  }
  if (TEST_ENVIRONMENTS.includes(nodeEnv)) {
    return dotenv.config({
      path: join(__dirname, 'test.env'),
    })
  }
}

const load = nodeEnv => {
  if (!DOTENV_ENVIRONMENTS.includes(nodeEnv)) {
    console.info('Skipping dotenv configuration')
    return
  }
  loadDotEnv(nodeEnv)
}

module.exports = {
  load,
}
