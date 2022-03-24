const merge = require('webpack-merge');
const WebpackBase = require('./webpack.base.js');
const WebpackConfig = require('./webpack.config');

const WebpackProduction = merge(WebpackBase, {
    mode: WebpackConfig.PRODUCTION_MODE,
    module: WebpackConfig.PRODUCTION_MODULE,
    plugins: WebpackConfig.PRODUCTION_PLUGINS,
    optimization: WebpackConfig.PRODUCTION_OPTIMIZATION
});
module.exports = WebpackProduction;