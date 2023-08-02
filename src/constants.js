require('dotenv').config();

exports.PORT = process.env.PORT || 5000;
exports.DB_CONNECTION_STRING = process.env.MONGODB_URI || 'mongodb://localhost:27017/recipes-bul';
exports.JWT_SECRET = 'dodjihfDiugvkri84hr5kidf053%^6sd';
exports.AUTH_COOKIE_NAME = 'token';