const express = require('express')

//get the express's instance generated on server.js
module.exports = function(server) {
    //route express instance
    const router = express.Router()
    //middleware to create the url to routes
    server.use('/api', router)
    
    //get references to model billingCycle
    const BillingCycle = require('../api/billingCycle/billingCycle')
    //registering routes from /billingCycles
    //Now, to acess web express's API restful service, the url is 'http://localhost:3003/api/billingCycles'
    BillingCycle.register(router, '/billingCycles')
}