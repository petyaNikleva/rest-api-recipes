const User = require('../models/User');
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../constants');

exports.register = ({ username, password }) => User.create({ username, password });

exports.login = async ({ username, password }) => {
    let user = await User.findOne({ username })
    if (!user) {
        throw new Error(`${username} Invalid username or password.`)
    }

    let isValid = await user.validatePassword(password);
    if (!isValid) {
        throw new Error(`${password} Invalid username or password.`)
    }

    let payload = {
        _id: user._id,
        username: user.username
    };

    let token = await jwt.sign(payload, JWT_SECRET);

    return { user, token };
};

