const path = require('path');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = {
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'static/frontend'),
    filename: 'main.js',
  },
  devServer: {
    hot: true
  },
  module: {
    rules: [
      {
        test: /\.(js|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(png|jpe?g|gif|woff|ttf|woff2|svg|eot)$/i,
        use: [
          {
            loader: 'file-loader',
            // exclude: /(\/fonts)/

          },
        ],
      },
      {
        test: /\.scss$/,
        use: [
          "style-loader",
          "css-loader",
          // "resolve-url-loader",
          "sass-loader",
        ],
      },
    ],
  },
  plugins: [new ForkTsCheckerWebpackPlugin()],

  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
};
