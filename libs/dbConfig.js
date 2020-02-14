const mongoose = require('mongoose');
mongoose.connect("mongodb://121.36.1.100:27017/user",{
    useNewUrlParser:true,//使用新的解释器
    useUnifiedTopology:true,//使用新的引擎
    useCreateIndex:true,//定义索引
    poolSize:5//定义连接池内的连接数量

});
module.exports = mongoose;