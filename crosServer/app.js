/**
 * 作为 server，提供接口数据
 */

const Koa = require('koa');
// 路由控制
const router = require('koa-router')();
// 解析post请求中的body
const bodyParser = require('koa-bodyparser');

const app = new Koa();

// 如果是 option 预检请求，直接返回200及验证信息
app.use(async (ctx, next)=> {
  // 允许客户端携带跨域cookie，此时origin值不能为“*”，只能为指定单一域名
  ctx.set('Access-Control-Allow-Credentials', true);
  // ctx.set('Access-Control-Allow-Origin', '*');
  ctx.set('Access-Control-Allow-Origin', 'http://0.0.0.0:7777');
  console.log('请求携带的cookie：', ctx.get('cookie'))

  ctx.set('Access-Control-Allow-Headers', 'Content-Type, yourHeaderFeild');
  ctx.set('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
  if (ctx.method == 'OPTIONS') {
    ctx.body = 200;
  } else {
    await next();
  }
});

// 返回接口数据
router.post('/api/getList', async (ctx, next) => {
  ctx.response.body = {
    code: 0,
    msg: 'success',
    data: [{
      id: 1,
      name: 'crosData'
    }]
  }
})

router.get('/', async (ctx, next) => {
  ctx.response.body = `<h1>crosServer启动成功 <br/> 提供 POST方法的 <span style="color: red;">/api/getList</span> 数据</h1>`
})

// 解析body，必须在 router 前
// app.use(bodyParser());

// add router middleware:
app.use(router.routes());

// 在端口3000监听:
app.listen(8888);
console.log('app started at port 8888...');
