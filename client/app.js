/**
 * 作为 client，跨域获取 /api/getList 数据
 */

const Koa = require('koa');
// 使用中间件进行路由控制
const controller = require('./routerController');
console.log(98765, controller)
// 解析post请求中的body
const bodyParser = require('koa-bodyparser');

const app = new Koa();


// 解析body，必须在 router 前
app.use(bodyParser());
app.use(controller());

// 在端口3000监听:
app.listen(7777);
console.log('app started at port 7777...');
