const path = require("path");
const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.config");
console.log("__dirname==", __dirname);
module.exports = merge(commonConfig, {
  mode: "development",
  devServer: {
    // contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 9000,
    historyApiFallback: true,
    //启动hrm 功能
    hot: true,
  },
});
