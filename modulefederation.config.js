const deps = require("./package.json").dependencies;

module.exports = {
  name: "rasoulmedia",
  filename: "remoteEntry.js",
  remotes: {
    remote: "remote@https://rasoul678.github.io/MicroFront-CRACO-remote/remoteEntry.js",
  },
  exposes: {},
  shared: {
    ...deps,
    react: {
      singleton: true,
      requiredVersion: deps["react"],
    },
    "react-dom": {
      singleton: true,
      requiredVersion: deps["react-dom"],
    },
  },
};
