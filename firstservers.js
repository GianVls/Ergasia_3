var express = require('express')
var fs = require('fs')
var app = express()
const broker = require("./broker")
app.use(express.json())


app.post('/', function(request, response) {
  console.log('POST /')
  console.dir(request.body)
  broker.publish(request.body.toString())
  response.writeHead(200, {'Content-Type': 'text/html'})
  response.end('thanks')
})

const port = 8000
app.listen(port)
console.log(`Listening at http://192.168.120.18:${port}`)
