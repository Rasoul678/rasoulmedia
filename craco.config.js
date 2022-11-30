const cracoModuleFederation = require("craco-module-federation");

module.exports = {
  output: {
    publicPath: "http://localhost:3000",
  },
  plugins: [
    {
      plugin: cracoModuleFederation,
    },
  ],
};
