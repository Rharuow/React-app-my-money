const port = 3003

const bodyParser = require('body-parser')
const express = require('express')
const server = express()


//it's middleware to use boyParser
server.use(bodyParser.urlencoded({ extended: true }))
//it's middleware to use json
server.use(bodyParser.json())

//express listen on port defined at line 1
server.listen(port, function() {
    console.log(`The backend is run on port ${port}`)
})

module.exports = server