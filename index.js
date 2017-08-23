const express = require('express')  
const app = express()  
const port = 3000

var ip = require("ip");
var os = require("os");
var pjson = require('./package.json');

app.use((request, response, next) => {  
  console.log(request.headers)
  next()
})

app.use((request, response, next) => {  
  request.chance = Math.random()
  next()
})

app.get('/', (request, response) => {  
  response.json({
    host: os.hostname(),
    ip: ip.address(),
    date: new Date(),
    version: pjson.version,
    chance: request.chance
  })
})

app.get('/version', (request, response) => {  
  response.json({
    version: pjson.version
  })
})

app.get('/host', (request, response) => {  
  response.json({
    host: os.hostname()
  })
})

app.get('/ip', (request, response) => {  
  response.json({
    ip: ip.address()
  })
})

app.get('/chance', (request, response) => {  
  response.json({
    chance: request.chance
  })
})

app.listen(port, (err) => {  
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${port}`)
})