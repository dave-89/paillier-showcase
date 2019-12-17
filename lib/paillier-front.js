// // import paillier
const paillier = require('paillier-js')

function createKeyPair (size) {
  const { publicKey, privateKey } = paillier.generateRandomKeys(size)
  return {
    pub: publicKey,
    priv: privateKey
  }
}
function loadKeyPair (keyPairObj) {
  const pub = keyPairObj.pub
  const priv = keyPairObj.priv
  const publicKey = new paillier.PublicKey(pub.n, pub.g)
  const privateKey = new paillier.PrivateKey(
    priv.lambda,
    priv.mu,
    priv.p,
    priv.q,
    priv.publicKey
  )
  return {
    pub: publicKey,
    priv: privateKey
  }
}

function encrypt (publicKey, plain) {
  const cipher = publicKey.encrypt(plain)
  const cipherB64 = btoa(cipher)
  return cipherB64
}

function decrypt (privateKey, cipherB64) {
  const cipher = atob(cipherB64)
  const clear = privateKey.decrypt(cipher)
  return clear
}

module.exports = {
  createKeyPair: createKeyPair,
  loadKeyPair: loadKeyPair,
  encrypt: encrypt,
  decrypt: decrypt
}
