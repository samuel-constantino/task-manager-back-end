/* eslint-disable mocha/no-mocha-arrows */
const { expect } = require('chai');
const sinon = require('sinon');

const userController = require('../../../../controllers/user');
const userService = require('../../../../services/user');

describe('user register controller', () => {
    const req = {};
    const res = {};

    describe('success', () => {
        const NEW_USER_RESPONSE = {
            _id: '507f1f77bcf86cd799439011',
            name: 'User Test',
            email: 'test@test.com',
        };
        before(() => {
            req.body = {
                name: 'User Test',
                email: 'test@test.com',
                password: '12345678',
            };

            res.status = sinon.stub().returns(res);
            res.json = sinon.stub().returns();
            sinon.stub(userService, 'register').resolves(NEW_USER_RESPONSE);
        });

        it('return created status (201)', async () => {
            await userController.register(req, res);
            expect(res.status.calledWith(201)).to.be.equal(true);
        });

        it('return a correct json file', async () => {
            await userController.register(req, res);
            expect(res.json.calledWith(NEW_USER_RESPONSE)).to.be.equal(true);
        });
    });
});