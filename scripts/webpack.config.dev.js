const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.config");

module.exports = merge(commonConfig, {
  mode: "development",
  devServer: {
    // contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 9000,
  },
});
