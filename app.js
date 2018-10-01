const Koa = require('koa');
const bodyParser = require('koa-bodyparser');

const index = require('./routes/index');


const app = new Koa();
app.use(bodyParser());

var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');


async function run() {
    mongoose.connect('mongodb://127.0.0.1/michaelDB', { useNewUrlParser: true });
    // await mongoose.connection.dropDatabase();
}
run().catch(error => console.error(error.stack));

app.use(index)
app.listen(3000)