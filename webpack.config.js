const path = require('path')
const htmlWebPackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const copyPlugin = require('copy-webpack-plugin')

module.exports = {
  entry: './app/js/app.js',
  output: {
    filename: 'bundled.js',
    path: path.resolve(__dirname, 'dist')
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    port: 3000
  },
  plugins: [
    new htmlWebPackPlugin({
      filename: 'index.html',
      template: './app/index.html'
    }),
    new MiniCssExtractPlugin({
      filename: 'styles.css',
      chunkFilename: 'styles.css'
    }),
    new copyPlugin({
      patterns: [
        { 
          from: path.resolve(__dirname, 'app/assets'),
          to: path.resolve(__dirname, 'dist/assets')
        }        
      ]
    })
  ],
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {sourceMap: true, url: false}
          },
          {
            loader: 'sass-loader',
            options: {sourceMap: true}
          }
        ]
      }
    ]
  }
}