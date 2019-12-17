// // import paillier
const paillier = require('paillier-js')

function loadPubKey (pubKey) {
  const publicKey = new paillier.PublicKey(pubKey.n, pubKey.g)
  return publicKey
}

function b64decode (encoded) {
  return Buffer.from(encoded, 'base64').toString()
}

function b64encode (decoded) {
  return Buffer.from(decoded.toString()).toString('base64')
}

function secretSum (publicKey, cipher1B64, cipher2B64) {
  const cipher1 = b64decode(cipher1B64)
  const cipher2 = b64decode(cipher2B64)
  const cipherRes = publicKey.addition(cipher1, cipher2)
  const cipherResB64 = b64encode(cipherRes)
  return cipherResB64
}

module.exports = {
  loadPubKey: loadPubKey,
  secretSum: secretSum
}
