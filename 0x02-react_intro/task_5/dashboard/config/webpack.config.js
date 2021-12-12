const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: path.join(__dirname, "../src", "index.js"),
    output: {
    path:path.resolve(__dirname, "../dist", 'bundle.js')
    },

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
      },
    devtool: 'inline-source-map',
    devServer: {
      static: './dist',
     hot: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
          title: 'Hot Module Replacement',
        }),
      ],

  
}
