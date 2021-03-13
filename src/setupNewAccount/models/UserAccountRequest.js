class UserAccountRequest {
    constructor({ username, password, email, tenantName, groupName }) {
        this.username = username;
        this.password = password;
        this.tenantName = tenantName;
        this.groupName = groupName;
        this.email = email;
    }
}

UserAccountRequest.create = (input) => {
    try {
        if (!input) throw new Error('input is null / empty');
        const instance = new UserAccountRequest(input);

        return instance;
    } catch (e) {
        throw e;
    }
};

exports.UserAccountRequest = UserAccountRequest;
