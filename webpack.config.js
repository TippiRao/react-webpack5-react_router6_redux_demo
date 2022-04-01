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
    path: path.join(__dirname, "./dist"),
    filename: "[name].[chunkhash:8].js",
    publicPath: "/",
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
      {
        test: /\.less$/,
        // oneOf: [
        //   {
        //     loader: "css-loader",
        //     resourceQuery: /css_modules/,
        //     options: { modules: true },
        //   },
        //   { loader: "css-loader" },
        // ],
        use: [
          devMode ? "style-loader" : MiniCssExtractPlugin.loader,
          {
            //支持css modules
            loader: "css-loader",
            options: {
              modules: {
                localIdentName: "[name][local]-[hash:base64]", //name-文件名，local-classname 名字 + base64编码
              },
            },
          },
          // "css-loader",
          "postcss-loader",
          "less-loader",
        ],
        exclude: [path.resolve(__dirname, "..", "node_modules")], //node_modules 里面的样式不用当前rule 进行处理
      },

      {
        test: /\.css$/,
        use: [
          devMode ? "style-loader" : MiniCssExtractPlugin.loader,
          // {
          //   loader: "css-loader",
          //   options: { modules: true },
          // },
          "css-loader",
          "postcss-loader",
        ],
        exclude: [path.resolve(__dirname, "..", "node_modules")], //node_modules 里面的样式不用当前rule 进行处理
      },
      {
        test: /\.(png|jpe?g|gif|svg|mp4|webm|ogg|mp3|wav|flac|aac|woff2?|eot|ttf|otf)(\?.*)?$/,
        use: ["url-loader"],
        include: [srcDir],
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
  optimization: {
    splitChunks: {
      automaticNameDelimiter: "-",
      chunks: "all", // 默认只作用于异步模块，为`all`时对所有模块生效,`initial`对同步模块有效
    },
  },
};
