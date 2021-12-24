const { merge } = require('webpack-merge');
const common = require('./webpack.base.js');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        static: './dist',
        compress: true,
        historyApiFallback: true,
        hot: true,
        port: 8080,
        proxy: {},
        open: true,
        https: false,
    },
    optimization: {
        nodeEnv: 'development'
    }
})