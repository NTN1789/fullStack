const express = require('express') ;
const router = require('./router');

const app = express();
app.use(router);    // toda requisição vai cair no router

module.exports = app;