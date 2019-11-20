module.exports = {
  hashSaltRounds: 10,
  jwt: {
    secret: process.env.JWT_SECRET,
    duration: process.env.JWT_DURATION || '1h',
    privateKey: process.env.JWT_PRIVATE_KEY,
    publicKey: process.env.JWT_PUBLIC_KEY,
  },
}
