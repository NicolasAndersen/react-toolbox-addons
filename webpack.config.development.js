const pkg = require('./package');
const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    context: __dirname,
    devtool: 'inline-source-map',
    entry: [
        'webpack-hot-middleware/client',
        './spec/index.js'
    ],
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'spec.js',
        publicPath: '/build/'
    },
    resolve: {
        extensions: ['', '.scss', '.js', '.json'],
        packageMains: ['browser', 'web', 'browserify', 'main', 'style']
    },
    module: {
        loaders: [
            {
                test: /\.ts$/,
                loaders: ['babel-loader', 'ts-loader'],
                exclude: [/(node_modules)/]
            },
            {
                test: /\.js$/,
                loader: 'babel',
                exclude: [/(node_modules)/, /react-css-themr/]
            }, {
                test: /\.(scss)$/,
                loader: ExtractTextPlugin.extract('style', 'css?sourceMap&modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss!sass?sourceMap')
            },
            {
                test: /\.(css)$/,
                loader: ExtractTextPlugin.extract('style', 'css?sourceMap&modules&importLoaders=1&localIdentName=[local]!postcss')
            }
        ],
        preLoaders: [
            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            {test: /\.js$/, loader: 'source-map-loader'}
        ]
    },
    postcss: [autoprefixer],
    sassLoader: {
        data: '@import "config_colors.scss";',
        includePaths: [path.resolve(__dirname, './spec')]
    },
    plugins: [
        new ExtractTextPlugin('spec.css', {allChunks: true}),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development'),
            VERSION: JSON.stringify(pkg.version)
        })
    ]
};
