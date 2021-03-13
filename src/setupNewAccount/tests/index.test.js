jest.mock('../services/account-service', () => {
    return { setNewAccountInCognito: () => true };
});
const { setupNewAccount } = require('../../index');

describe('handler Tests', () => {
    it('should return 500 status code when input is null', async () => {
        const actual = await setupNewAccount(null);
        expect(actual).not.toBeNull();
        expect(actual.statusCode).toEqual(500);
    });
    it('should return 500 status code when input is missing username', async () => {
        const actual = await setupNewAccount({
            password: 'Abc123456789$',
            email: 'fake@fake.com',
            tenantName: 'Fake-Tenant',
            groupName: 'FakeGroupName',
        });
        expect(actual).not.toBeNull();
        expect(actual.statusCode).toEqual(500);
    });
    it('should return 500 status code when input is missing password', async () => {
        const actual = await setupNewAccount({
            username: 'Fake123',
            email: 'fake@fake.com',
            tenantName: 'Fake-Tenant',
            groupName: 'FakeGroupName',
        });
        expect(actual).not.toBeNull();
        expect(actual.statusCode).toEqual(500);
    });
    it('should return 500 status code when input is missing groupName', async () => {
        const actual = await setupNewAccount({
            username: 'Fake123',
            password: 'Abc123456789$',
            email: 'fake@fake.com',
            tenantName: 'Fake-Tenant',
        });
        expect(actual).not.toBeNull();
        expect(actual.statusCode).toEqual(500);
    });
    it('should return 200 status code when input is missing groupName', async () => {
        const actual = await setupNewAccount({
            username: 'Fake123',
            password: 'Abc123456789$',
            email: 'fake@fake.com',
            tenantName: 'Fake-Tenant',
            groupName: 'Fake_Group',
        });
        expect(actual).not.toBeNull();
        expect(actual.statusCode).toEqual(200);
    });
});
