var Controller = require('./staff-controller'),
    routerConfig = require('../../middlewares/router-config/router-config');

var BASE_PATH = routerConfig.build('/staff');

function router(app) {
    app.route('/api/staff')
        .post(Controller.create)
        .get(Controller.list)
        .delete(Controller.removeAll);

    app.route(BASE_PATH + '/:id')
        .get(Controller.read);

    app.param('id', Controller.listById);
}

module.exports = router;
