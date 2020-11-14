const sign = _ => "Generated token"

const verify = _ => new Promise((resolve, reject) => resolve(true))

module.exports = {
  sign,
  verify,
}
