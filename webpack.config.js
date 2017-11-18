var webpack = require('webpack')
const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: './src/js/entry.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './src/js'),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
      },
      {
        test: /\.(png|jpg|gif)$/,
        loader: 'url-loader?limit=70000'
      }
    ]
    // loaders: [
    //   // {
    //   //   test: /\.css$/, loader: 'style-loader!css-loader'
    //   // },
    //   {
    //     test: /\.(png|jpg|gif)$/,
    //     loader: 'url-loader?limit=70000'
    //   }
    // ]
  },
  plugins:[
    new ExtractTextPlugin("styles.css"),
    new webpack.ProvidePlugin({
      $:"jquery",
      jQuery:"jquery",
      "window.jQuery":"jquery"
    })
  ]
}
