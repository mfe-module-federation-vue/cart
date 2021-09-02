const ModuleFederationPlugin = require("webpack").container
  .ModuleFederationPlugin;
  const dependencies = require("./package.json").dependencies;

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
          "./CartIcon": "./src/components/CartIcon",
        },
        remotes: {
          ds: process.env.REMOTE_DS,
        },
        shared: {
          vuetify: {
            singleton: true,
          },
          vue: {
            singleton: true,
          },
          "@mfe-module-federation-vue/dealful-package": {
            requiredVersion:
              dependencies["@mfe-module-federation-vue/dealful-package"],
            singleton: true, // only a single version of the shared module is allowed
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
