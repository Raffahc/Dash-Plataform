var express = require('express'),
    morgan = require('morgan');

function setup() {
    var app = express();

    app.use(morgan('dev'));
    console.log('dev environment');
}


module.exports = {
    express: {
        setup: setup,
    }
};
