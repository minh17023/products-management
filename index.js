const express = require('express');
require('dotenv').config();

const database = require('./config/database.js');   // Kết nối mongo
database.connect();

const systemConfig = require('./config/system.js');

const route = require('./routes/client/index.route.js');
const routeAdmin = require('./routes/admin/index.route.js');

const app = express();
const port = process.env.PORT;


app.set('views', './views');
app.set('view engine', 'pug');

app.use(express.static("public"));
// Routes
route(app);
routeAdmin(app);

// Khai báo biến local
app.locals.prefixAdmin = systemConfig.prefixAdmin;

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});