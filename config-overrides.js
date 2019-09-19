const { override, addLessLoader, fixBabelImports, addWebpackAlias, addWebpackModuleRule } = require("customize-cra");
const path = require('path');

module.exports = override(
  addLessLoader({
    strictMath: true,
    noIeCompat: true,
    localIdentName: "[local]--[hash:base64:5]" // if you use CSS Modules, and custom `localIdentName`, default is '[local]--[hash:base64:5]'.
  }),
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: 'css',
  }),
  addWebpackAlias({
    '@': path.resolve(__dirname, './src')
  }),
  addWebpackModuleRule({
    test: /\.jsx?$/,
    loader: 'eslint-loader',
    enforce: 'pre',
    include: [path.resolve(__dirname, './src')],
    options: {
      formatter: require('eslint-friendly-formatter')
    }
  })
);