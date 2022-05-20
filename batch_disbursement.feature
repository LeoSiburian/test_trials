Feature: Batch Disbursement
    @create-valid-batch-disbursement
    Scenario: Check Batch Disbursement Endpoint
        Given create valid batch disbursement
        Then get valid batch disbursement status

    @create-invalid-batch-disbursement
    Scenario: Check Batch Disbursement Endpoint
        Given create invalid batch disbursement
