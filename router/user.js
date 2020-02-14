const Router = require('koa-router');
const router = new Router();
// router.prefix('/api/user'); 与集中管理router的index文件冲突 router.use('/api/user')
const {login, register, getUser} = require('../controller/user')
router.get('/userList',getUser);
router.post('/register',register);
router.post('/login',login);
module.exports = router.routes();