const restful = require('node-restful')
//creating instance mongoose with restful package
const mongoose = restful.mongoose
//OBS: EXPRESS AND MONGO DOESN'T HAVE COMMUNICATION. AS THE MONGO'S REFERENCE WITH 'restful.mongoose' THE RESTFUL PACKAGE MAKE A LINK BETWEEN THEM, ALLOW US USE MONGOOSE METHODS AS THE EXPRESS METHODS.

//Using mongoose's method Schema to create schemas
const creditSchema = new mongoose.Schema({
    name: { type: String, require: true },
    value: { type: Number, min:0, require: true }
})

const debtSchema = new mongoose.Schema({
    name: { type: String, require: true },
    value: { type: Number, min:0, require: true },
    status: { type: String, require: false, uppercase: true, enum: ['PAGO', 'PENDENTE', 'AGENDADO'] }
})

const billingCycleSchema = new mongoose.Schema({
    name: { type: String, require: true },
    month: { type: Number, min: 1, max: 12, require: true },
    year: { type: Number, min: 1970, max: 2100, require: true },
    credits: [creditSchema],
    debts: [debtSchema]
})

//exporting the model with billingCycleSchema to persistence
module.exports = restful.model('BillingCycle', billingCycleSchema)