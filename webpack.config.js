var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        particles: "./src/index.js",
    },
    output: {
        filename: '[name].js',
    },
    mode: 'development',
    devServer: {
        port: 8080
    },
    plugins: [
        new HtmlWebpackPlugin({
            hash: true,
            filename: './src/index.html',
            title: "STRONKA",
            template: './src/index.html',
        }),
    ],
    module: {
        rules: [{
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|jp(e*)g|svg)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 8000,
                        name: 'images/[hash]-[name].[ext]'
                    }
                }]
            }
        ]
    },

};