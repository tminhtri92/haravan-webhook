// Require express and body-parser
const express = require("express")
const bodyParser = require("body-parser")
const Haravan = require('haravan-validate')
// Initialize express and define a port
const app = express()
const PORT = 3000

var haravan = new Haravan("4ea2733cecb5402d95ce8a42d7bb72d34a70df62195a251d5f8bde99845aa9af")

var middleware = [haravan, bodyParser.json()]

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

app.post('/webhook', middleware, (req, res) => {
  console.log(req)
  // validate the request is from haravan
  if (!req.fromHaravan()) {
    return res.status(401).send()
  }

  // send success notification to haravan
  // done before to prevent timeout
  res.status(200).send()

  const body = req.body
  // process webhook
})

app.get("/webhooks", (req, res) => {
  console.log(req) // Call your action on the request here
  res.status(200).end() // Responding is important
})
//...