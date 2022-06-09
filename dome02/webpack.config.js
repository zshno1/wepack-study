const path = require("path");

module.exports = {
  entry: "./index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      /**
       * 你需要安装 style-loader 和 css-loader，并在 module 配置 中添加这些 loader：
       * npm install --save-dev style-loader css-loader
       *  */
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      // 图片处理
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      // 处理字体
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
      /**
       * 加载数据 npm install --save-dev csv-loader xml-loader
       * 1、JSON 支持实际上是内置的，可以直接导入
       * 2、要导入 CSV、TSV 和 XML，你可以使用 csv-loader 和 xml-loader
       *    npm install --save-dev csv-loader xml-loader
       */
      {
        test: /\.(csv|tsv)$/,
        use: ["csv-loader"],
      },
      {
        test: /\.xml$/,
        use: ["xml-loader"],
      },
    ],
  },
};
