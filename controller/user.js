const {User} = require('../model/user');
const register = async (ctx)=>{
    const {username, password} = ctx.request.body;
    const user = await User.create({
        username,
        password
    });
    ctx.body = {
        status:'200',
        message:'注册成功'

    }
};
const getUser = async (ctx)=>{
    ctx.body = await User.find();
}
const login = async (ctx)=>{
    const {username, password} = ctx.request.body;
    const user = await User.findOne({
        username,
        password
    });
    console.log(user);
    if(user){
        ctx.body = {
            status:200,
            message:'登陆成功'
        }
    }
    else{
        ctx.body = {
            status:404,
            message:'登录失败'
        }
    }
}
module.exports = {getUser,register, login}
