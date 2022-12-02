const deps = require("./package.json").dependencies;

module.exports = {
  name: "rasoulmedia",
  filename: "remoteEntry.js",
  remotes: {
    editor: "editor@https://rasoul678.github.io/rasoulmedia-editor/remoteEntry.js",
    store: "store@https://rasoul678.github.io/rasoulmedia-store/remoteEntry.js",
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
    "react-redux": {
      singleton: true,
      version: deps["react-redux"],
    },
  },
};
