/* eslint-disable mocha/no-mocha-arrows */
const { expect } = require('chai');
const sinon = require('sinon');

const userService = require('../../../../services/user');
const userModel = require('../../../../models/user');

describe('user login service', () => {
    let LOGIN_PAYLOAD = null;
    let LOGIN_MODEL_RESPONSE = null;
    const USER_PROPERTIES = ['_id', 'name', 'email', 'token'];

    describe('success', () => {
        LOGIN_PAYLOAD = {
            email: 'test@test.com',
            password: 'test123',
        };
        LOGIN_MODEL_RESPONSE = {
            _id: '507f1f77bcf86cd799439011',
            name: 'User Test',
            email: 'test@test.com',
            password: 'test123',
        };
        let user = null;
        
        before(async () => {
            sinon.stub(userModel, 'findByEmail').resolves(true);
            sinon.stub(userModel, 'login').resolves(LOGIN_MODEL_RESPONSE);
            user = await userService.login(LOGIN_PAYLOAD);
        });

        after(() => {
            userModel.login.restore();
            userModel.findByEmail.restore();
        });

        it('returns an object', async () => {
            expect(user).to.be.an('object');
        });
        
        it('returns object with correct properties', async () => {
            USER_PROPERTIES.forEach((property) => {
                expect(user).to.have.property(property);
            });
        });
    });
});
