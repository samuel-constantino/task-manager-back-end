/* eslint-disable no-unused-expressions */
/* eslint-disable mocha/no-mocha-arrows */
const { expect } = require('chai');
const sinon = require('sinon');

const { MongoClient } = require('mongodb');
const { connectionMemory } = require('../util/connectionMemory');
require('dotenv').config();

const userModel = require('../../../../models/user');

const { DB_NAME } = process.env;

describe('user register model', () => {
    let connectionMock = null;
    
    const USER_PAYLOAD = {
        name: 'User Test',
        email: 'test@test.com',
        password: 'test123',
    };
    
    const USER_PROPERTIES = ['_id', 'name', 'email', 'password'];

    before(async () => {
        connectionMock = await connectionMemory();
        sinon.stub(MongoClient, 'connect').resolves(connectionMock);
    });

    after(async () => {
        await connectionMock.db(DB_NAME).collection('users').drop();
        sinon.restore();
    });

    describe('success', () => {
        let response = null;

        before(async () => {
            response = await userModel.register(USER_PAYLOAD);
        });

        it('returns an object', async () => {
            expect(response).to.be.an('object');
        });
        
        it('returns object with correct properties', async () => {
            USER_PROPERTIES.forEach((property) => {
                expect(response).to.have.property(property);
            });
        });

        it('find user in database', async () => {
            const createdUser = await connectionMock
                .db(DB_NAME)
                .collection('users')
                .findOne({ name: USER_PAYLOAD.name });

            expect(createdUser).to.be.not.null;
        });
    });
});
