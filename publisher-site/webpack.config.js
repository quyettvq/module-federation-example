const {ModuleFederationPlugin} = require("webpack").container;

module.exports = {
    entry: "./src/index.js",
    mode: "production",
    plugins: [
        new ModuleFederationPlugin({
            remotes: {
                ad_library: "ad_library@http://localhost:8080/dist/remoteEntry.js"
            }
        })
    ]
};
