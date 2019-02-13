// 使用 nunjucks 模版引擎
const nunjucks = require('nunjucks');

function createEnv(path, opts) {
  var autoescape = opts.autoescape === undefined ? true : opts.autoescape,
      noCache = opts.noCache || false,
      watch = opts.watch || false,
      throwOnUndefined = opts.throwOnUndefined || false,
      env = new nunjucks.Environment(
      new nunjucks.FileSystemLoader(path, {
        noCache: noCache,
        watch: watch,
      }), {
        autoescape: autoescape,
        throwOnUndefined: throwOnUndefined
      });
  if (opts.filters) {
    for (var f in opts.filters) {
      env.addFilter(f, opts.filters[f]);
    }
  }
  return env;
}

module.exports = createEnv(__dirname+'/views', {
  watch: true,
  filters: {
    hex: function (n) {
      return '0x' + n.toString(16);
    }
  }
})
