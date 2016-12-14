var Model = require('mongoose').model('Staff'),
    ResponseHandler = require('../../middlewares/response-handler/response-handler');

function create(req, res, next) {
    var model = new Model(req.body);

    model.save(function (err) {
        ResponseHandler.parse(model, res, next, err);
    });
}

function list(req, res, next) {
    Model.find({}, function (err, list) {
        ResponseHandler.parse(list, res, next, err);
    });
}

function read(req, res) {
    res.json(req.model);
}

function listById(req, res, next, id) {
    Model.findOne({
        _id: id
    }, function (err, model) {
        if (err) {
            return next(err);
        } else {
            req.model = model;
            next();
        }
    });
}

function removeAll(req, res, next) {
    Model.remove({}, function (err) {
        if (err) {
            console.log(err);
        } else {
            res.end('success');
            next();
        }
    });
}

exports.create = create;
exports.list = list;
exports.read = read;
exports.listById = listById;
exports.removeAll = removeAll;
