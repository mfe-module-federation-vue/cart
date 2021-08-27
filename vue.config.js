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
          ds: process.env.REMOTE_DS,
        },
        shared: {
          vuetify: {
            singleton: true,
          },
          vue: {
            singleton: true,
          },
        },
      }),
    ],
  },
  devServer: {
    port: 3001,
    progress: false,
  },
};
