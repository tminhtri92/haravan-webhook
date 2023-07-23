const express = require("express")
const bodyParser = require("body-parser")
const haravanValidate = require('haravan-validate')

const haravan = new haravanValidate("4ea2733cecb5402d95ce8a42d7bb72d34a70df62195a251d5f8bde99845aa9af")
const haravanMiddleware = [haravan, bodyParser.json()]

const app = express()
const PORT = 3000

app.use(bodyParser.json())
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`))

app.use(bodyParser.json())

app.get('/webhook', (req, res) => {
  console.log(req.originalUrl)
  res.status(200).send(req.query?.["hub.challenge"])
})

app.post('/webhook', haravanMiddleware, function(req, res) {

  console.log('req.fromHaravan()', req.fromHaravan())
  // validate the request is from haravan
  if (!req.fromHaravan()) {
    return res.status(401).send()
  }

  // send success notification to haravan
  // done before to prevent timeout
  res.status(200).send()

  const topic = req.headers?.['x-haravan-topic']

  console.log('topic',topic)

})

app.post('/webhooks', (req, res) => {
  console.log(req.body)
  res.status(200).send()
})


