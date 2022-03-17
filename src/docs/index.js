const basicInfo = require('./basicInfo');
const servers = require('./servers');
const components = require('./components');
const tags = require('./tags');
const task = require('./task');
const login = require('./login');

module.exports = {
    ...basicInfo,
    ...servers,
    ...components,
    ...tags,
    ...task,
    ...login,
};
