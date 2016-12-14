var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var Staff = new Schema({
    email: {
        unique: true,
        required: true,
        trim: true,
        type: String
    },

    name: String,
    phone: String
});

mongoose.model('Staff', Staff);