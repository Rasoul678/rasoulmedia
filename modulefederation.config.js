const deps = require("./package.json").dependencies;

module.exports = {
  name: "rasoulmedia",
  filename: "remoteEntry.js",
  remotes: {
    editor: "editor@http://localhost:3020/remoteEntry.js",
    store: "store@http://localhost:3010/remoteEntry.js",
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
