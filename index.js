const express = require('express');
const { PORT } = require('./src/constants.js')
const { initDatbase } = require('./src/config/databaseConfig.js');
const routes = require('./src/routes.js');

const app = express();

require('./src/config/expressConfig.js')(app);

app.use(routes);

initDatbase()
    .then(() => {
        app.listen(PORT, () => console.log(`The server is running on http://localhost:${PORT}`))
    }).catch(err => {
        console.log(`Cannot connect database.`, err);
    })