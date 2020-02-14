# node-mongoose-mvc
node 的mvc三层架构
### router  路由
# 分模块，最后由index统一管理
### model 数据模型管理
# 分模块
### controller 管理进入路由所做的事情，业务逻辑处理
# 分模块
### middleware 自定义中间件
# 将所有自定义的中间件放在里面，比如error.js 错误处理中间件
### libs 配置文件
