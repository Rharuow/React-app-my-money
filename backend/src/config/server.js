const port = 3003

const bodyParser = require('body-parser')
const express = require('express')
const server = express()
const allowCors = require('./cors')
const queryParser = require('express-query-int')


//it's middleware to use boyParser
server.use(bodyParser.urlencoded({ extended: true }))
//it's middleware to use json
server.use(bodyParser.json())
//aplly middleware cors
server.use(allowCors)
//middleware queryParser transform the string params on int type
server.use(queryParser())

//express listen on port defined at line 1
server.listen(port, function() {
    console.log(`The backend is run on port ${port}`)
})

module.exports = server