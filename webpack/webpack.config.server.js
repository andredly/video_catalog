const merge = require('webpack-merge');
const webpackNodeExternals = require('webpack-node-externals');
const common = require('./webpack.config.common');

module.exports = merge(common, {
  name: 'server',
  target: 'node',
  entry: './src/serverRenderer.js',
  externals: [webpackNodeExternals({
    whitelist: [/\.(?!(?:jsx?|json)$).{1,5}$/i],
  })],
  output: {
    filename: 'js/serverRenderer.js',
    libraryTarget: 'commonjs2',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: 'null-loader',
      },
    ],
  },
});
