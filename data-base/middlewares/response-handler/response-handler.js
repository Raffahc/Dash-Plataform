function parse (model, response, next, error) {
    if(error) {
        return next(error);
    } else {
        response.json(model);
    }
}

exports.parse = parse;
