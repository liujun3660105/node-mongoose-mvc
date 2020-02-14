//此文件全局管理路由

const Router = require('koa-router');
const router = new Router();
//User路由
const userRouter = require('./user');
router.use('/api/user',userRouter);

//导出全局路由
module.exports = router



//第二种方式
// module.exports = (app)=>{
//     app.use(userRouter.routes())
// }
//  在app中
//  const router = require('./router');
//  router(app);