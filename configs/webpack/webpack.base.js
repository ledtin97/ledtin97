const WebpackConfig = require('./webpack.config');

const WebpackBase = {
    entry: WebpackConfig.ENTRY,
    output: WebpackConfig.OUTPUT,
    resolve: WebpackConfig.RESOLVE,
    module: WebpackConfig.BASE_MODULE,
    plugins: WebpackConfig.BASE_PLUGINS,
    optimization: WebpackConfig.BASE_OPTIMIZATION,
    // watch: true,
}
module.exports = WebpackBase;