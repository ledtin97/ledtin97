const Mode = require('../utils/mode');
const ModuleRules = require('../utils/moduleRules');
const Plugins = require('../utils/plugins').Webpack;
const AppConfigs = require('../../public/manifest.json');
const DirName = require('path').resolve(__dirname, '../../');


const ENTRY = `${DirName}/src/index.js`;
const OUTPUT = {
    path: `${DirName}/docs`,
    filename: 'assets/js/[name].[contenthash:8].js',
    publicPath: '/'
};
const RESOLVE = {
    extensions: ['.js', '.jsx']
};
const DEVELOPMENT_MODE = Mode.DEVELOPMENT;
const PRODUCTION_MODE = Mode.PRODUCTION;
const DEVELOPMENT_TOOL = 'cheap-module-source-map';


const BASE_MODULE = {
    rules: [
        ModuleRules.URL_MODULE_RULE,
        ModuleRules.SVG_MODULE_RULE,
        ModuleRules.FILE_MODULE_RULE,
        ModuleRules.WORKER_LOADER_MODULE_RULE,
    ]
};
const DEVELOPMENT_MODULE = {
    rules: [
        ModuleRules.BABLE_MODULE_RULE_DEVELOPMENT,
        ModuleRules.CSS_MODULE_RULE_DEVELOPMENT,
        ModuleRules.MODULES_CSS_MODULE_RULE_DEVELOPMENT,
        ModuleRules.SASS_AND_SCSS_MODULE_RULE_DEVELOPMENT,
    ]
};
const PRODUCTION_MODULE = {
    rules: [
        ModuleRules.BABLE_MODULE_RULE_PRODUCT,
        ModuleRules.CSS_MODULE_RULE_PRODUCT,
        ModuleRules.MODULES_CSS_MODULE_RULE_PRODUCT,
        ModuleRules.SASS_AND_SCSS_MODULE_RULE_PRODUCT,
    ]
};


const DEVELOPMENT_SERVER = AppConfigs.devServer;


const BASE_PLUGINS =  [
    Plugins.HTML_WEBPACK_PLUGIN(DirName, AppConfigs),
    //Plugins.WORKBOX_WEBPACK_PLUGIN_GENERATE_SW,
];
const PRODUCTION_PLUGINS = [
    Plugins.CLEAN_WEBPACK_PLUGIN,
    Plugins.MINI_CSS_EXTRACT_PLUGIN,
];


const BASE_OPTIMIZATION = {
    minimizer: [
        Plugins.TERSER_WEBPACK_PLUGIN,
        Plugins.OPTIMIZE_CSS_ASSETS_PLUGIN
    ],
    splitChunks: require('../utils/splitChunks'),
    runtimeChunk: 'single'
};
const DEVELOPMENT_OPTIMIZATION = {
    minimize: false,
};
const PRODUCTION_OPTIMIZATION = {
    minimize: true,
}


const WebpackConfig = {
    ENTRY, OUTPUT, RESOLVE,
    DEVELOPMENT_MODE, PRODUCTION_MODE, DEVELOPMENT_TOOL,
    BASE_MODULE, DEVELOPMENT_MODULE, PRODUCTION_MODULE,
    DEVELOPMENT_SERVER, BASE_PLUGINS, PRODUCTION_PLUGINS,
    BASE_OPTIMIZATION, DEVELOPMENT_OPTIMIZATION, PRODUCTION_OPTIMIZATION
};
module.exports = WebpackConfig;
