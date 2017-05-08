var webpack = require('webpack')
const path = require('path');

module.exports = {
  entry: './src/js/entry.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './src/js'),
  },
  module: {
    loaders: [
      {
        test: /\.css$/, loader: 'style-loader!css-loader'
      },
      {
        test: /\.(png|jpg|gif)$/,
        loader: 'url-loader?limit=70000'
      },
    ]
  },
  plugins:[
    new webpack.ProvidePlugin({
      $:"jquery",
      jQuery:"jquery",
      "window.jQuery":"jquery"
    })
  ]
}
