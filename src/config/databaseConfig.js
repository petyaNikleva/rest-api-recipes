const mongoose = require('mongoose');


const {DB_CONNECTION_STRING} = require('../constants');

exports.initDatbase = function () {
    console.log(DB_CONNECTION_STRING)
    return mongoose.connect(DB_CONNECTION_STRING)
};
