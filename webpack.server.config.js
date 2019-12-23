const path = require('path');
const webpackNodeExternals = require('webpack-node-externals');
const ExtractTextPlugin = require('extract-text-webpack-plugin');


module.exports = {
  mode: 'production',
  target: 'node',
  entry: './src/serverRenderer.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'server.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        use: 'null-loader',
      },
    ],
  },
  externals: [webpackNodeExternals({
    // load non-javascript files with extensions, presumably via loaders
    whitelist: [/\.(?!(?:jsx?|json)$).{1,5}$/i],
  })],
  devtool: 'cheap-module-source-map',
};
