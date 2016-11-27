process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var UI_PATH = './web-package';

var express = require('./server-side/config/express'),
    mongoose = require('./data-base/config/mongoose'),

    db = mongoose.init(),
    app = express(mongoose.dbRoutes, UI_PATH);

app.listen(3000);
module.exports = app;

console.log('Server running at http://localhost:3000/');
