/* eslint-disable no-unused-expressions */
/* eslint-disable mocha/no-mocha-arrows */
const { expect } = require('chai');
const sinon = require('sinon');

const { MongoClient } = require('mongodb');
const { connectionMemory } = require('../util/connectionMemory');
require('dotenv').config();

const User = require('../../../../models/user');

const { DB_NAME } = process.env;

const { USER_PAYLOAD_1, USER_PROPERTIES } = require('../util/modelsMock');

describe('user registration', () => {
    let connectionMock = null;

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
            response = await User.register(USER_PAYLOAD_1);
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
                .findOne({ name: USER_PAYLOAD_1.name });

            expect(createdUser).to.be.not.null;
        });
    });
});
