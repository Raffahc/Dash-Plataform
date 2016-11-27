var mongoose = require('mongoose');

var environment = require('./environments/' + process.env.NODE_ENV + '.js');

var dbModels = require('../data-model/data-models'),
    dbRoutes = require('../data-model/data-routes');

function init() {
    var db = mongoose.connect(environment.mongoose.db);
    dbModels();

    return db;
}

module.exports = {
    init: init,
    dbRoutes: dbRoutes
};
