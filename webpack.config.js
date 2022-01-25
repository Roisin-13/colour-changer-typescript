const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    // change to .tsx if necessary
    entry: './src/App.jsx',
    output: {
        filename: './bundle.js'
    },
    resolve: {
        // changed from extensions: [".js", ".jsx"]
        extensions: [".ts", ".tsx", ".js", ".jsx"]
    },
    module: {
        rules: [
            // changed from { test: /\.jsx?$/, use: { loader: 'babel-loader' }, exclude: /node_modules/ },
            { test: /\.(t|j)sx?$/, use: { loader: 'ts-loader' }, exclude: "/node_modules/"},

            //needed for css apparently!
            { test: /\.css$/i, use: ["style-loader", "css-loader"], exclude: "/node_modules/"},

            // addition - add source-map support
            { enforce: "pre", test: /\.js$/, exclude: "/node_modules/", loader: "source-map-loader" }
        ]
    },
    externals: {
        "react": "React",
        "react-dom": "ReactDOM",
    },
    // addition - add source-map support
    devtool: "source-map",
    //},
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, "public", "index.html"),
        }),
    ],
 }