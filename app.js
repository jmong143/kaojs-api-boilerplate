const Koa = require('koa');

const index = require('./routes/index');

const app = new Koa();

var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://127.0.0.1/michaelDB');

app.use(index)
app.listen(3000)