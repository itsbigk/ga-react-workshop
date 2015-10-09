var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: [
    './src/App.jsx'
  ],
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: "bundle.js"
  },
  devtool: 'eval',
  module: {
    preLoaders: [
        {
            test: /\.(jsx|js)$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'source-map'
        }
    ],
    loaders: [
      {
        test: /\.(jsx|js)?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel'
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]
}
