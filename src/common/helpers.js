const { ResponseHelpers } = require('../models/response-helper');

const createResponseMessage = async (cb) => {
    try {
        await cb();
        return ResponseHelpers.createSuccessResult();
    } catch (e) {
        return ResponseHelpers.createFailureResult(e);
    }
};

exports.createResponseMessage = createResponseMessage;
