const basicInfo = require('./basicInfo');
const servers = require('./servers');
const components = require('./components');
const tags = require('./tags');
const task = require('./task');

module.exports = {
    ...basicInfo,
    ...servers,
    ...components,
    ...tags,
    ...task,
};