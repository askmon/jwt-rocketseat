const sign = payload =>
  Promise.resolve(JSON.stringify(payload))

module.exports = {
  sign,
}
