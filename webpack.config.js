var path = require('path');

module.exports = {
  mode: 'development',
  entry: "./src/index.tsx",

  output: {
    filename: "bundle.js",
    path: __dirname + "/dist"
  },

  devtool: "source-map",

  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"]
  },

  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    inline: true,
    hot: true,
    host: "localhost",
    port: 8080,
    open: true
  },


  module: {
    rules: [
      { test: /\.tsx?$/, loader: "ts-loader" },
      { test: /\.css$/, use: ['style-loader', 'css-loader']},
    ]
  },
};
