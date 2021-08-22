const ModuleFederationPlugin = require("webpack").container
  .ModuleFederationPlugin;

module.exports = {
  publicPath: process.env.PUBLIC_PATH,
  transpileDependencies: ["vuetify"],
  configureWebpack: {
    plugins: [
      new ModuleFederationPlugin({
        name: "cart",
        filename: "remoteEntry.js",
        exposes: {
          "./Cart": "./src/components/Cart",
        },
        remotes: {
          root: process.env.REMOTE_ROOT,
          store: process.env.REMOTE_STORE,
          ds: process.env.REMOTE_DS,
        },
        shared: require("./package.json").dependencies,
      }),
    ],
  },
  devServer: {
    port: 3001,
    progress: false,
  },
};
