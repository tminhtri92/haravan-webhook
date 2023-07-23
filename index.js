// Require express and body-parser
const express = require("express")
const bodyParser = require("body-parser")
const Haravan = require('haravan-validate')
// Initialize express and define a port
const app = express()
const PORT = 3000

// Tell express to use body-parser's JSON parsing
app.use(bodyParser.json())
// Start express on the defined port
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`))

//...
app.use(bodyParser.json())
app.post("/hook", (req, res) => {
  console.log(req.body) // Call your action on the request here
  res.status(200).end() // Responding is important
})

app.get('/webhook', (req, res) => {
  console.log(req.originalUrl)
  res.status(200).send(req.query?.["hub.challenge"])
})

app.get("/webhooks", (req, res) => {
  console.log(req) // Call your action on the request here
  res.status(200).end() // Responding is important
})
//...