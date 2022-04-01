const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.config");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = merge(commonConfig, {
  plugins: [new MiniCssExtractPlugin()],
});
