const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: "development",
  entry: path.resolve(__dirname, './src/index.ts'),
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "./build"),
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "./build"),
    },
    port: 3000,
  },
  module: {
    // exclude node_modules
    rules: [
           // `js` and `jsx` files are parsed using `babel`
      {
        test: /\.(js|jsx)$/, 
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      // `ts` and `tsx` files are parsed using `ts-loader`
      { 
        test: /\.(ts|tsx)$/, 
        loader: "ts-loader" 
      },
      {
        test: /\.(s(a|c)ss)$/,
        use: [MiniCssExtractPlugin.loader,'css-loader', 'sass-loader']
      },
      {
        test: /\.(woff|woff2|eot|ttf|svg|jpg|png)$/,
        use: { loader: 'url-loader' },
      }
    ],
  },
  // pass all js files through Babel
  resolve: {
    extensions: [".*",".js",".jsx",".ts",".tsx"],   // <-- added `.jsx` here
  }, 
  plugins: [
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "public", "index.html"),
    }),
  ],
};