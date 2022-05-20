require('app-module-path').addPath(process.cwd());

const {createValidDisbursement} = require('~/../../api/features/test_functions/test');
const {createInvalidDisbursement} = require('~/../../api/features/test_functions/test');
var status = null;

const {Given, When, Then} = require('@cucumber/cucumber')

Given ('create valid batch disbursement', async function () {
    console.log("-------------Create Valid Batch Disbursement-------------")
    try {
        const createValidDisbursementResponse = await createValidDisbursement()
        console.log(createValidDisbursementResponse.body)
        status = createValidDisbursementResponse.status
    } catch(err) {
        console.log(err);
        throw new Error (err.text);
    }
})

When ('get valid batch disbursement status', async function () {
    console.log("")
    try {
        console.log("Disbursement status:", status)
    } catch(err) {
        console.log(err);
        throw new Error (err.text);
    }
})

When ('create invalid batch disbursement', async function () {
    console.log("-------------Create Invalid Batch Disbursement-------------")
    try {
        const createInvalidDisbursementResponse = await createInvalidDisbursement()
        console.log(createInvalidDisbursementResponse.body)
        status = createInvalidDisbursementResponse.status
    } catch(err) {
        console.log(err);
        throw new Error (err.text);
    }
})
