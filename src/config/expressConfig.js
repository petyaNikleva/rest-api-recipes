const express = require('express');
//const path = require('path');
const cookieParser = require('cookie-parser');
const cors = require('cors');

const { auth } = require('../middlewares/authMiddleware');

function expressConfig(app) {
    //app.use('/static', express.static(path.resolve(__dirname, '../public')));
    app.use(express.urlencoded({extended: true}));
    app.use(express.json());
    app.use(cookieParser());
    app.use(cors());
    app.use(auth);
}

module.exports = expressConfig;