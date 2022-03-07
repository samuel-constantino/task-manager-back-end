/* eslint-disable mocha/no-mocha-arrows */
const { expect } = require('chai');
const sinon = require('sinon');

const userController = require('../../../../controllers/user');
const userService = require('../../../../services/user');

describe('user login controller', () => {
    const req = {};
    const res = {};

    describe('success', () => {
        const USER_RESPONSE = {
            _id: '507f1f77bcf86cd799439011',
            name: 'User Test',
            email: 'test@test.com',
            token: 'ha31msAjsaMdak1',
        };
        before(() => {
            req.body = {
                email: 'test@test.com',
                password: '12345678',
            };

            res.status = sinon.stub().returns(res);
            res.json = sinon.stub().returns();
            sinon.stub(userService, 'login').resolves(USER_RESPONSE);
        });

        it('return OK status (200)', async () => {
            await userController.login(req, res);
            expect(res.status.calledWith(200)).to.be.equal(true);
        });

        it('return a correct json file', async () => {
            await userController.login(req, res);
            expect(res.json.calledWith(USER_RESPONSE)).to.be.equal(true);
        });
    });
});