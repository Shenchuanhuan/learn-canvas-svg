const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');

const cssLoders = [
    {
        test: /\.css$/,
        use: 'css-loader',
        exclude: /node_modules/
    }
]

const jsxLoader = [
    {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                cacheDirectory: true,
                presets: ["@babel/preset-env", "@babel/preset-react"]
            },
        }
    }
]

const imgLoader = (function () {
    return [
        { type: 'png', mimetype: 'image/png' },
        { type: 'jpg', mimetype: 'image/jpg' },
        { type: 'jpeg', mimetype: 'image/jpeg' },
        { type: 'gif', mimetype: 'image/gif' },
        { type: 'svg', mimetype: 'image/svg' },
        { type: 'ico', mimetype: 'image/ico' },
        { type: 'cur', mimetype: 'image/cur' }
    ].map(item => ({
        test: new RegExp(`\\.(${item.type})(\\?.*)?$`),
        type: 'asset/resource',
        parser: {
            dataUrlCondition: {
                maxSize: 10000
            }
        },
        generator: {
            dataUrl: {
                mimetype: item.mimetype,
            },
            filename: "images/[hash][ext][query]",
        }
    }))
}())

const fontLoader = (function () {
    return [
        { type: 'woff', mimetype: 'application/font-woff' },
        { type: 'woff2', mimetype: 'application/font-woff2' },
        { type: 'otf', mimetype: 'font/opentype' },
        { type: 'ttf', mimetype: 'application/octet-stream' },
        { type: 'eot', mimetype: 'application/vnd.ms-fontobject' },
        { type: 'svg', mimetype: 'image/svg+xml' }
    ].map(item => ({
        test: new RegExp(`\\.(${item.type})(\\?.*)?$`),
        type: 'asset',
        parser: {
            dataUrlCondition: {
                maxSize: 10000
            }
        },
        generator: {
            dataUrl: {
                mimetype: item.mimetype,
            },
            filename: "fonts/[hash][ext][query]",
        },
    }))
}())

const jsonLoader = [
    {
        test: /\.json?$/,
        type: 'json'
    }
]

module.exports = {
    entry: "./index.js",
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    module: {
        rules: [
            ...fontLoader,
            ...imgLoader,
            ...jsonLoader,
            ...jsxLoader,
            ...cssLoders
        ]
    },
    plugins: [new HtmlWebpackPlugin({
        title: 'react-light-cli',
        template: 'index.html',
    })],
}