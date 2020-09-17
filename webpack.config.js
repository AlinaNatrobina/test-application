const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  context: path.resolve(__dirname, "src"),
  mode: "development",
  entry: "./index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.[hash].js",
    chunkFilename: "[name].chunk.[hash].js",
  },
  resolve: {
    extensions: [".js", ".jsx", ".json"],
    modules: ["node_modules"],
    alias: {
      components: path.resolve(__dirname, "src/components"),
      containers: path.resolve(__dirname, "src/containers"),
      assets: path.resolve(__dirname, "src/assets"),
      styles: path.resolve(__dirname, "src/styles"),
      dataBase: path.resolve(__dirname, "src/dataBase"),
      constants: path.resolve(__dirname, "src/constants"),
      utils: path.resolve(__dirname, "src/utils"),
    },
  },
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },
  devServer: {
    port: 4200,
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env", "@babel/preset-react"],
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ["file-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
      favicon: path.resolve(__dirname, "src/assets/favicon.ico"),
    }),
    new CleanWebpackPlugin(),
  ],
};
