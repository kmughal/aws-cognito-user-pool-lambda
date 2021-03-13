const { UserAccountRequest } = require('./models/UserAccountRequest');
const { createResponseMessage } = require('../common/helpers');
let service = require('./services/account-service');

async function handler(event) {
    const inputData = event && event.body ? event.body : event;
    const result = await createResponseMessage(async () => {
        const _input = UserAccountRequest.create(inputData);
        const _result = await service.setNewAccountInCognito(_input);
        return JSON.stringify(_result);
    });

    return result;
}
module.exports.handler = handler;
