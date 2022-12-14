const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === "production" ? "." : ".",

  // publicPath: "./",
  // publicPath: process.env.NODE_ENV === "production" ? "/bp-fork/" : "./",
  configureWebpack: {
    devServer: {
      historyApiFallback: true,
    },
  },
});
