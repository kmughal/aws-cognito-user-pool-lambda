const { poolData, CognitoUserPool, CognitoUserAttribute } = require('../config/cognito-settings');
const userPool = new CognitoUserPool(poolData);

function setNewAccountInCognito({ username, password, email, groupName = 'TestGroup', tenantName = 'tenantName' }) {
    const attributeList = [];
   
    attributeList.push(
        new CognitoUserAttribute({
            Name: 'email',
            Value: email,
        })
    );

    attributeList.push(
        new CognitoUserAttribute({
            Name: 'custom:groupName',
            Value: groupName,
        })
    );

    attributeList.push(
        new CognitoUserAttribute({
            Name: 'custom:tenantName',
            Value: tenantName,
        })
    );

    // attributeList.push(
    //     new CognitoUserAttribute({
    //         Name: 'custom:tenant_id',
    //         Value: tenantName,
    //     })
    // );

    return new Promise((resolve, reject) => {
        userPool.signUp(username, password, attributeList, null, signUpCallback);

        function signUpCallback(err, result) {
            if (err) reject(err.message || 'Something went wrong');
            else resolve(result);
        }
    });
}

exports.setNewAccountInCognito = setNewAccountInCognito;
