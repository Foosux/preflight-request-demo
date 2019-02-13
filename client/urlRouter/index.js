/**
 * 路由管理
 */

// 使用模版引擎
var env = require('../nunjucksTemp')

// 首页
var fn_index = async (ctx, next) => {
  ctx.response.body = env.render('index.html', {})
}

module.exports = {
  'GET /': fn_index,
};
