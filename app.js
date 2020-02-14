const Koa  = require('koa');
const app = new Koa();
const error = require('./middleware/error');
app.use(error);
const router = require('./router');
app.use(require('koa-bodyparser')());

app.use(router.routes(),router.allowedMethods());
app.listen(3000,()=>{
    console.log('服务启动');
}
)