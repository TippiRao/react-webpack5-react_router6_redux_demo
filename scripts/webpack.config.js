const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HappyPack = require("happypack");
const os = require("os");
const happyThreadPool = HappyPack.ThreadPool({ size: os.cpus().length });

const srcDir = path.join(__dirname, "./src");
const devMode = process.env.NODE_ENV !== "production";

module.exports = {
  entry: {
    main: path.join(__dirname, "./src/index.tsx"),
  },
  output: {
    path: path.join(__dirname, "../dist"),
    filename: "[name].[chunkhash:8].js",
    // publicPath: "/",
    chunkFilename: "chunk/[name].[chunkhash:8].js",
  },
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.(tsx?|js)$/,
        loader: "babel-loader",
        options: { cacheDirectory: true },
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: `${srcDir}/index.html`,
    }),
    new CleanWebpackPlugin(),
    new HappyPack({
      id: "happybabel",
      loaders: ["babel-loader?cacheDirectory=true"],
      threadPool: happyThreadPool,
      // cache: true,
      verbose: true,
    }),
  ],
};
