var path = require('path')

module.exports = {
  entry: path.join(__dirname,'client','App.jsx'),
  output:{
      path: path.join(__dirname,'build','scripts'),
      filename: 'index.js'
  },
  devtool: "source-map",
  optimization: {
    // We no not want to minimize our code.
    minimize: false
},
  module:{
    rules:[
        {
            test: /\.jsx$/,
            use: 'babel-loader'
        },
        {
           test: /\.scss$/,
           use:[
               {
                   loader: 'style-loader'
               },
               {
                    loader: 'css-loader'
               },
               {
                    loader: 'sass-loader'
               }
           ]
        }
    ]
  }
}