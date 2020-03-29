// next.js 使用import形式把css文件引入配置，这样我们就可以使用UI库了
// 这里不安装@zeit/next-css的话，直接在组件引入css会报错
const withCss = require('@zeit/next-css');

if (typeof require !== 'undefined') {
  require.extensions['.css'] = file => {}
}

module.exports = withCss({})