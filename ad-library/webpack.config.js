const {ModuleFederationPlugin} = require("webpack").container;

module.exports = {
    entry: "./src/index.js",
    mode: "production",
    plugins: [
        new ModuleFederationPlugin({
            name: "ad_library",
            filename: "remoteEntry.js",
            exposes: {
                "./AdView": "./src/AdView",
            }
        })
    ]
};
