const Koa = require('koa');
const bodyParser = require('koa-bodyparser');

const postRoutes = require('../DemoNewsFeed/routes/v1/posts/index');

const routes = require('./routes/index');
// const dal = require('./dal');
// const api = require('./api');
const app = new Koa();
app.use(bodyParser());
app.use(routes);
// app.use(postRoutes);


app.listen(4000, () => {
    console.log("Running in port 4000");
});

