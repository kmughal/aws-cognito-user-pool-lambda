
const poolData = {
    UserPoolId: process.env.Pool_Id,
    ClientId: process.env.Client_Id,
};
 
const AmazonCognitoIdentity = require('amazon-cognito-identity-js');
const CognitoUserPool = AmazonCognitoIdentity.CognitoUserPool;
const CognitoUserAttribute = AmazonCognitoIdentity.CognitoUserAttribute;

module.exports = { poolData, CognitoUserPool, CognitoUserAttribute };
