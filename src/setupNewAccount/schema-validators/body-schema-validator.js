const yup = require('yup');
const bodySchema = yup.object().shape({
    username: yup
        .string()
        .required()
        .min(3, 'username must have at least three characters')
        .max(10, 'username can not have more than 10 characters'),
    password: yup
        .string()
        .required()
        .min(8, 'password must have at least three characters')
        .matches(
            /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W)/,
            'password must have one number, one symbol, one small character and one capital character'
        ),
    groupName: yup.string().required(),
    email: yup.string().email().required(),
    tenantName: yup.string().required(),
});

module.exports.bodySchema = bodySchema;
