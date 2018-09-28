const Koa = require('koa');

const index = require('./routes/index');

const app = new Koa();

app.use(index)
app.listen(3000)