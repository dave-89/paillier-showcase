const express = require('express')
const paillier = require('./lib/paillier-back')
const bodyParser = require('body-parser')

const PORT = process.env.PORT || 8080
const BASE = process.env.BASE || 'http://localhost'

const app = express()

app.use(bodyParser.json())

app.use(express.static('public'))

app.post('/sum', (req, res) => {
  const body = req.body
  console.log(body)
  const pub = paillier.loadPubKey(body.pub)
  const secSum = paillier.secretSum(pub, body.cipher1, body.cipher2)
  res.send({
    result: secSum
  })
})

app.listen(PORT, () => {
  console.log(`Listening at  ${BASE}:${PORT}`)
})
