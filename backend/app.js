const express = require('express');
const logger = require('morgan');
const cors = require('cors')
const path = require('path');
const createError = require('http-errors');
const config = require('./config/config');
const routes = require('./routes/Routes');

const app = express();

app.use(cors());  //enable cors
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public'))); // https://expressjs.com/fr/starter/static-files.html

app.use('/lol-data-report', routes);


// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});


app.use((req, res, next) => {
  next(createError(404));
});
app.listen(config.APP_PORT); // Listen on port defined in environment

module.exports = app;