//get the reference to model billingCycle of mongoose
const BillingCycle = require('./billingCycle')

//Using express methods to create services web
BillingCycle.methods(['get', 'post', 'put', 'delete'])
//By default the mongo doesn't apply validations to update (put) but just insert (post). Furthermore when the update is done, it's returned to the old object. This method 'updateOption' make adjustments about this.
BillingCycle.updateOptions({ new: true, runValidators: true })

//exporting the reference with express's changes
module.exports = BillingCycle
