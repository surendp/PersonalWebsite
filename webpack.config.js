
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path  = require('path');

module.exports = {
  entry :'./src/app/index.js',
  output: {
    path: '/src/public',
    filename: 'bundle.js',
  },

  module: {
      rules: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
               presets: ['env', 'react']
            }
         },
         {
      			 test: /\.css?$/,
      			 loader: 'style-loader!css-loader'
		     },
         {
              test: /\.(png|jpg|gif|jpeg)$/,
              loader: 'file-loader'
         }
      ]
   },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/public/index.html"
    })
  ],

  devServer: {
    contentBase:'./src/public',
  }
};
