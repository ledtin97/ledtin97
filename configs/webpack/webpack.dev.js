const merge = require('webpack-merge');
const WebpackBase = require('./webpack.base.js');
const WebpackConfig = require('./webpack.config');

const WebpackDevelopment = merge(WebpackBase, {
    mode: WebpackConfig.DEVELOPMENT_MODE,
    devtool: WebpackConfig.DEVELOPMENT_TOOL,
    module: WebpackConfig.DEVELOPMENT_MODULE,
    devServer: WebpackConfig.DEVELOPMENT_SERVER,
    optimization: WebpackConfig.DEVELOPMENT_OPTIMIZATION
});
module.exports = WebpackDevelopment;