//get the reference to model billingCycle of mongoose
const BillingCycle = require('./billingCycle')

//Using express methods to create services web
BillingCycle.methods(['get', 'post', 'put', 'delete'])
//By default the mongo doesn't apply validations to update (put) but just insert (post). Furthermore when the update is done, it's returned to the old object. This method 'updateOption' make adjustments about this.
BillingCycle.updateOptions({ new: true, runValidators: true })

BillingCycle.route('count', (req, res, next) => {
    BillingCycle.count((error, value) => {
        if (error) {
            res.status(500).json({errors: [error]})
        } else {
            //value is the number of elements
            res.json({value})
        }
    })
})

BillingCycle.route('summary', (req, res, next) => {
    BillingCycle.aggregate([{ 
        $project: {credit: {$sum: "$credits.value"}, debt: {$sum: "$debts.value"}} 
    }, { 
        $group: {_id: null, credit: {$sum: "$credit"}, debt: {$sum: "$debt"}}
    }, { 
        $project: {_id: 0, credit: 1, debt: 1}
    }], (error, result) => {
        if(error) {
            res.status(500).json({errors: [error]})
        } else {
            res.json(result[0] || {credit: 0, debt: 0})
        }
    })
})

//exporting the reference with express's changes
module.exports = BillingCycle
