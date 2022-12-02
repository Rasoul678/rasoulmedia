const cracoModuleFederation = require("craco-module-federation");

module.exports = {
  mode: "production",
  output: {
    publicPath: "https://rasoulmedia.com/",
  },
  plugins: [
    {
      plugin: cracoModuleFederation,
    },
  ],
};
