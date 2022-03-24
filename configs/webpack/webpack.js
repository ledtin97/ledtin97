const WebpackProcess = function (_env, argv) {
    console.log(`Building ${argv.mode} ...`);
    
    return require('../utils/mode').IS_DEVELOPMENT(argv.mode)
        ? require('./webpack.dev')
        : require('./webpack.prod');
};

module.exports = WebpackProcess;