/**
 * 路由中间件, 扫描 router 目录下的路由
 */
const fs = require('fs');

console.log(11111, __dirname)
// 这里可以用sync是因为启动时只运行一次，不存在性能问题:
var files = fs.readdirSync(__dirname + '/urlRouter');
var js_files = files.filter((f)=>{
  return f.endsWith('.js');
});

function addMapping(router, mapping) {
  for (var url in mapping) {
    if (url.startsWith('GET ')) {
      var path = url.substring(4);
      router.get(path, mapping[url]);
      console.log(`register URL mapping: GET ${path}`);
    } else if (url.startsWith('POST ')) {
      var path = url.substring(5);
      router.post(path, mapping[url]);
      console.log(`register URL mapping: POST ${path}`);
    } else {
      console.log(`invalid URL: ${url}`);
    }
  }
}

function addControllers(router) {
  var files = fs.readdirSync(__dirname + '/urlRouter');
  var js_files = files.filter((f) => {
    return f.endsWith('.js');
  });

  for (var f of js_files) {
    console.log(`process controller: ${f}...`);
    let mapping = require(__dirname + '/urlRouter/' + f);
    addMapping(router, mapping);
  }
}

module.exports = function (dir) {
  let controllers_dir = dir || __dirname +'/urlRouter', // 如果不传参数，扫描目录默认为'urlRouter'
  router = require('koa-router')();
  addControllers(router, controllers_dir);
  return router.routes();
};
