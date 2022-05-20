require('app-module-path').addPath(process.cwd());

exports.createValidDisbursement = async() => {
    return Bluebird.promisifyAll(superagent).post(`https://api.xendit.co/batch_disbursements`)
        .set ({'Content-Type': 'application/json'})
        .set ({'Authorization': 'Basic eG5kX2RldmVsb3BtZW50X2Z6Ym81VExqOGxNYjY5elptdVpmc29hTjhXbHdtQ0xES2IyUnpJcDJZZlhVVmJEMmNQV01Hbllrd3JEb1czOg=='})
        .send ({
            "reference": "disb_batch-1652961486",
            "disbursements": 
            [
                {
                    "amount": 10000,
                    "bank_code": "BNI",
                    "bank_account_name": "Matilda Hyatt",
                    "bank_account_number": "1234567001",
                    "description": "Batch Disbursement with email notifications",
                    "external_id": "disbursement-2",
                    "email_to": ["disbursement@xendit.co"],
                    "email_cc": ["leo.siburian@xendit.co"],
                    "email_bcc": ["leo.siburian@xendit.co"]
                },
                {
                    "amount": 90000,
                    "bank_code": "BCA",
                    "bank_account_name": "Matilda Hyatt",
                    "bank_account_number": "1234567001",
                    "description": "Batch Disbursement with email notifications",
                    "external_id": "disbursement-2",
                    "email_to": ["disbursement@xendit.co"],
                    "email_cc": ["leo.siburian@xendit.co"],
                    "email_bcc": ["leo.siburian@xendit.co"]
                }
            ]
        })
}

exports.createInvalidDisbursement = async() => {
    return Bluebird.promisifyAll(superagent).post(`https://api.xendit.co/batch_disbursements`)
    .set ({'Content-Type': 'application/json'})
    .set ({'Authorization': 'Basic eG5kX2RldmVsb3BtZW50X2Z6Ym81VExqOGxNYjY5elptdVpmc29hTjhXbHdtQ0xES2IyUnpJcDJZZlhVVmJEMmNQV01Hbllrd3JEb1czOg=='})
    .send ({
        "reference": "disb_batch-1652961486",
        "disbursements": 
        [
            {
                "amount": "TEST",
                "bank_code": "BNI",
                "bank_account_name": "Matilda Hyatt",
                "bank_account_number": "1234567001",
                "description": "Batch Disbursement with email notifications",
                "external_id": "disbursement-2",
                "email_to": ["disbursement@xendit.co"],
                "email_cc": ["leo.siburian@xendit.co"],
                "email_bcc": ["leo.siburian@xendit.co"]
            },
            {
                "amount": "TEST",
                "bank_code": "BCA",
                "bank_account_name": "Matilda Hyatt",
                "bank_account_number": "1234567001",
                "description": "Batch Disbursement with email notifications",
                "external_id": "disbursement-2",
                "email_to": ["disbursement@xendit.co"],
                "email_cc": ["leo.siburian@xendit.co"],
                "email_bcc": ["leo.siburian@xendit.co"]
            }
        ]
    })
}
