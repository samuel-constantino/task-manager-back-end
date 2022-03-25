const { findByUser } = require('./findByUser');
const { findById } = require('./findById');
const { create } = require('./create');
const { updateById } = require('./updateById');
const { removeByName } = require('./removeByName');
const { removeById } = require('./removeById');

module.exports = {
    findByUser,
    findById,
    create,
    updateById,
    removeByName,
    removeById,
};