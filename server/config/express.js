var express = require('express'),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override'),
    environment = require('./environments/' + process.env.NODE_ENV + '.js');

module.exports = function(dbRoutes, uiPath) {
    var app = express(),
        configBodyParser = {
            extended: true
        };

    environment.express.setup();
    app.use(bodyParser.urlencoded(configBodyParser));
    app.use(bodyParser.json());
    app.use(methodOverride());

    dbRoutes(app);
    app.use(express.static(uiPath));

    return app;
};
