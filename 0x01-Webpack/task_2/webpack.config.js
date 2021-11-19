// const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

// I'm Gonna Do What's Called a Pro Gamer Move
// check this one checker ["file-loader"]

module.exports = {
    entry: './js/dashboard_main.js',
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js',
      },
    mode: 'production',
    module: {
      rules: [
        {
          test: /\.css$/i,
          use: ["style-loader", "css-loader"],
        },
        {
          test: /\.(jpe?g|png|gif|svg)$/i,
          use: [
            {loader: 'image-webpack-loader'}
          ]
        },
      ],
    }
  };
