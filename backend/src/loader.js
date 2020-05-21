const server = require('./config/server')
require('./config/database')
//The routes instance export a function that require a parameter (the server)
require('./config/routes')(server)
