const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');

// I'm Gonna Do What's Called a Pro Gamer Move
// check this one checker ["file-loader"] ["inline-source-map"]

module.exports = {
    // entry: './js/dashboard_main.js',
    mode: 'development',
    entry: {
      header: './modules/header/header.js',
      body: './modules/body/body.js',
      footer: './modules/footer/footer.js'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'public'),

      },
    devServer: {
        static: {
          directory: path.join(__dirname, 'public'),
        },
        compress: true,
        contentBase: './public',
        port: 8564,
      },
      plugins: [
        new HtmlWebpackPlugin({
            title: "Document"
        }),
        new CleanWebpackPlugin(),
      ],
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
