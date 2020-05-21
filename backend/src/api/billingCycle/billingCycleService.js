//get the reference to model billingCycle of mongoose
const BillingCycle = require('./billingCycle')
//reference to middleware created to transform errors on a array
const errorsHandler = require('../common/errorsHandler')


//Using express methods to create services web
BillingCycle.methods(['get', 'post', 'put', 'delete'])
//By default the mongo doesn't apply validations to update (put) but just insert (post). Furthermore when the update is done, it's returned to the old object. This method 'updateOption' make adjustments about this.
BillingCycle.updateOptions({ new: true, runValidators: true })
//apply middleware errorsHandler
BillingCycle.after('post', errorsHandler).after('put', errorsHandler)

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
    //pipiline aggregate
    BillingCycle.aggregate([{ 
        //get all credit and debt of each object and sum they. The result is returned on object with key 'credit' and 'debt'
        $project: {credit: {$sum: "$credits.value"}, debt: {$sum: "$debts.value"}} 
    }, { 
        //get each sum from above step and sum again generating a new object
        //_id = null need be passed to get all objects
        $group: {_id: null, credit: {$sum: "$credit"}, debt: {$sum: "$debt"}}
    }, {
        // id (_id = 0) is false field, in the another words it no showed on object
        // however, credit and debt will return
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
