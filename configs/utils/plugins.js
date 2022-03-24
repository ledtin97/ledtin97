//#region WEBPACK PLUGINS

const HTML_WEBPACK_PLUGIN
    = (dirname, appConfigs) => new (require('html-webpack-plugin'))({
        title: appConfigs.title,
        template: `${dirname}/public/index.html`,
        inject: true,
        favicon: appConfigs.favicon,
        meta: appConfigs.meta,
        base: appConfigs.base
    });

const MINI_CSS_EXTRACT_PLUGIN
    = new (require('mini-css-extract-plugin'))({
        filename: 'assets/css/[name].[contenthash:8].css',
        chunkFilename: 'assets/css/[name].[contenthash:8].chunk.css'
    });

const ProductionOptimization = require('../../public/manifest.json').prodOptimization;
const TERSER_WEBPACK_PLUGIN
    = new (require('terser-webpack-plugin'))({
        terserOptions: {
            compress: {
                drop_console: ProductionOptimization.dropConsole,
                comparisons: false
            },
            mangle: {
                safari10: true
            },
            output: {
                comments: ProductionOptimization.comments,
                ascii_only: true
            },
            warnings: ProductionOptimization.warnings
        }
    });

const OPTIMIZE_CSS_ASSETS_PLUGIN
    = new (require('optimize-css-assets-webpack-plugin'));

const CLEAN_WEBPACK_PLUGIN
    = new (require('clean-webpack-plugin').CleanWebpackPlugin);

const WORKBOX_WEBPACK_PLUGIN_GENERATE_SW
    = new (require('workbox-webpack-plugin')).GenerateSW({
        swDest: "service-worker.js",
        clientsClaim: true,
        skipWaiting: true,
    })

//#endregion WEBPACK PLUGINS


//#region BABEL PLUGINS

const BABEL_COMMON_PLUGINS = [
    '@babel/plugin-transform-runtime',
    '@babel/plugin-syntax-dynamic-import',
    '@babel/plugin-proposal-class-properties'
]

const BABEL_PRODUCTION_PLUGINS = [
    [
        'transform-react-remove-prop-types',
        { removeImport: true }
    ],
    '@babel/plugin-transform-react-inline-elements',
    '@babel/plugin-transform-react-constant-elements'
]

//#endregion BABEL PLUGINS


module.exports = {
    Webpack: {
        HTML_WEBPACK_PLUGIN,
        MINI_CSS_EXTRACT_PLUGIN,
        TERSER_WEBPACK_PLUGIN,
        OPTIMIZE_CSS_ASSETS_PLUGIN,
        CLEAN_WEBPACK_PLUGIN,
        WORKBOX_WEBPACK_PLUGIN_GENERATE_SW
    },
    Babel: {
        BABEL_COMMON_PLUGINS,
        BABEL_PRODUCTION_PLUGINS
    }
}