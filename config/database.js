module.exports = {
  url: process.env.DATABASE_URL,
  dialect: 'postgres',
  pool: {
    max: 15,
    min: 0,
    acquire: 10000,
    idle: 1000,
  },
}
