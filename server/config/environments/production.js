var express = require('express'),
    compress = require('compression');

function setup() {
    var app = express();

    app.use(compress());
    console.log('prod environment');
}

module.exports = {
    express: {
        setup: setup
    }
};
