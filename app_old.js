const Koa = require('koa');
const KoaRouter = require('koa-router');
const json = require('koa-json');
const path = require('path');
const render = require('koa-ejs');
const bodyParser = require('koa-bodyparser');

const app = new Koa();
const router = new KoaRouter();
//body parser
app.use(bodyParser());

// add additional propteties to context
app.context.user = "Michael";

const fruitsData = ['Apple', 'Orange', 'Strawberr']


//JSON prettier Middleware
app.use(json());

//Simple Middleware Example
// app.use(async ctx => ctx.body = {"msg": "Hello World"});

render(app, {
    root: path.join(__dirname, 'views'),
    //layout: 'layout1',
    viewExt: 'html',
    cache: false,
    debug: false
});

router.get('/', index);
router.get('/add-fruit', showAddFruit);
router.post('/add-fruit', addFruit)

//List of Fruits
async function index(ctx){
    await ctx.render('index', {
        title: 'Welcome to Koa',
        fruits: fruitsData
    });
}

async function showAddFruit(ctx){
    await ctx.render('add');
}

async function addFruit(ctx){
    const body = ctx.request.body;
    fruitsData.push(body.fruit);
    ctx.redirect('/');
}

/*
router.get('/', async ctx => {
    await ctx.render('index', {
        title: 'Welcome to Koa',
        fruits: fruitsData
    });
});
*/

router.get('/test', ctx => ctx.body = `Hello ${ctx.user}`);
router.get('/test2/:name', ctx => ctx.body = `Hello ${ctx.params.name}`);
//Router Middleware
app.use(router.routes()).use(router.allowedMethods());

app.listen(3000, () => console.log('server started on port %s', 3000));