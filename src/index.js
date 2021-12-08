const express = require('express');
const { PORT } = require('./constants.js')
const { initDatbase } = require('./config/databaseConfig');
const routes = require('./routes');

const app = express();

require('./config/expressConfig')(app);

app.use(routes);

initDatbase()
    .then(() => {
        app.listen(PORT, () => console.log(`The server is running on http://localhost:${PORT}`))
    }).catch(err => {
        console.log(`Cannot connect database.`, err);
    })