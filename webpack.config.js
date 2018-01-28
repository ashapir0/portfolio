const path = require("path");

module.exports = {
  devtool: 'eval-source-map',
  entry: "./src/client/js/index.js",
  output: {
    path: path.join(__dirname, "/src/client/outputs"),
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        query: {
          compact: false
        },
        exclude: "/node_modules"
      },
      {
        test: /\.jsx$/,
        loader: "babel-loader",
        exclude: "/node_modules"
      }
    ]
  }
};