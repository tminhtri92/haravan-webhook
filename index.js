const express = require("express")
const bodyParser = require("body-parser")
const app = express()
const PORT = 3000

app.use(bodyParser.json())
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`))

app.use(bodyParser.json())

app.get('/webhook', (req, res) => {
  console.log(req.originalUrl)
  res.status(200).send(req.query?.["hub.challenge"])
})

app.post('/webhooks', (req, res) => {
  console.log(req.body)
  res.status(200).send()
})


