const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const htmlWebpackPlugin = new HtmlWebpackPlugin({
    template: path.join(__dirname, 'examples/src/index.html'),
    filename: './index.html'
});
module.exports = {
    entry: ['@babel/polyfill', path.join(__dirname, 'examples/src/index.js')],
    module: {
        rules: [
            {
                test: /\.(js|jsx)/,
                use: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            }
        ]
    },
    plugins: [htmlWebpackPlugin],
    resolve: {
        extensions: ['.js', '.jsx']
    },
    devServer: {
        port: 3001
    },
    output: {
        path: path.join(__dirname, "examples/dist"),
        filename: "bundle.js"
    },
    performance: { hints: false }
}
