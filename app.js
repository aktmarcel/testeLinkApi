
const express = require('express');

const pipedriveRouter = require('./routes/pipedrive');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/pipedrive', pipedriveRouter);


module.exports = app;
