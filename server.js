process.env.NODE_ENV = process.env.NODE_ENV || 'development';
var express = require('./config/express');
var mongoose = require('./config/mongoose');
var passport = require('./config/passport');

var db = mongoose();
var app = express();
var passport = passport();

app.listen(3000);

module.exports = app;
console.log('Hello');
console.log('Running...');
