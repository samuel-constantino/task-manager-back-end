/* eslint-disable mocha/no-mocha-arrows */
const { expect } = require('chai');
const sinon = require('sinon');

const userService = require('../../../../services/user');
const userModel = require('../../../../models/user');

describe('user register service', () => {
    let NEW_USER_PAYLOAD = null;

    let NEW_USER_RESPONSE = null;

    const USER_PROPERTIES = ['_id', 'name', 'email'];

    describe('success', () => {
        NEW_USER_PAYLOAD = {
            name: 'User Test',
            email: 'test@test.com',
            password: 'test123',
        };
        NEW_USER_RESPONSE = {
            _id: '507f1f77bcf86cd799439011',
            name: 'User Test',
            email: 'test@test.com',
        };
        let newUser = null;

        before(async () => {
            sinon.stub(userModel, 'register').resolves(NEW_USER_RESPONSE);
            newUser = await userService.register(NEW_USER_PAYLOAD);
        });

        after(() => {
            userModel.register.restore();
        });

        it('returns an object', async () => {
            expect(newUser).to.be.an('object');
        });
        
        it('returns object with correct properties', async () => {
            USER_PROPERTIES.forEach((property) => {
                expect(newUser).to.have.property(property);
            });
        });
    });
});