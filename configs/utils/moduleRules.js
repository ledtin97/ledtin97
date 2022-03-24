const Mode = require('./mode');
const RegExp = require('./regExp');

const URL_MODULE_RULE = {
    test: RegExp.URL_REG_EXP,
    use: {
        loader: 'url-loader',
        options: {
            limit: 8192,
            name: 'static/media/[name].[hash:8].[ext]'
        }
    }
};

const SVG_MODULE_RULE = {
    test: RegExp.SVG_REG_EXP,
    use: ['@svgr/webpack']
};

const FILE_MODULE_RULE = {
    test: RegExp.FILE_REG_EXP,
    loader: require.resolve('file-loader'),
    options: {
        name: 'static/media/[name].[hash:8].[ext]'
    }
};

const WORKER_LOADER_MODULE_RULE = {
    test: RegExp.WORKER_REG_EXP,
    loader: 'worker-loader'
}

const BABLE_MODULE_RULE_DEVELOPMENT = {
    test: RegExp.BABLE_REG_EXP,
    exclude: RegExp.NODE_MODULES_REG_EXP,
    use: {
        loader: 'babel-loader',
        options: {
            cacheDirectory: true,
            cacheCompression: false,
            envName: Mode.DEVELOPMENT
        }
    }
};

const BABLE_MODULE_RULE_PRODUCT = {
    test: RegExp.BABLE_REG_EXP,
    exclude: RegExp.NODE_MODULES_REG_EXP,
    use: {
        loader: 'babel-loader',
        options: {
            cacheDirectory: true,
            cacheCompression: false,
            envName: Mode.PRODUCTION
        }
    }
};

const CSS_MODULE_RULE_DEVELOPMENT = {
    test: RegExp.CSS_REG_EXP,
    use: [
        'style-loader',
        'css-loader',
        'postcss-loader'
    ]
};

const MODULES_CSS_MODULE_RULE_DEVELOPMENT = {
    test: RegExp.MODULE_CSS_REG_EXP,
    use: [
        'style-loader',
        {
            loader: 'css-loader',
            options: {
                modules: true
            }
        },
        {
            loader: 'postcss-loader',
            options: {
                modules: true,
            }
        },
    ]
};

const CSS_MODULE_RULE_PRODUCT = {
    test: RegExp.CSS_REG_EXP,
    use: [
        require('mini-css-extract-plugin').loader,
        'css-loader',
        'postcss-loader'
    ]
}

const MODULES_CSS_MODULE_RULE_PRODUCT = {
    test: RegExp.MODULE_CSS_REG_EXP,
    use: [
        require('mini-css-extract-plugin').loader,
        {
            loader: 'css-loader',
            options: {
                modules: true
            }
        },
        {
            loader: 'postcss-loader',
            options: {
                modules: true,
            }
        },
    ]
}

const SASS_AND_SCSS_MODULE_RULE_DEVELOPMENT = {
    test: RegExp.SASS_AND_SCSS_REG_EXP,
    use: [
        'style-loader',
        {
            loader: 'css-loader',
            options: {
                importLoaders: 2
            }
        },
        'resolve-url-loader',
        {
            loader: 'sass-loader',
            options: {
                sourceMap: true
            }
        },
        {
            loader: 'postcss-loader',
            options: {
                sourceMap: true
            }
        }
    ]
};

const SASS_AND_SCSS_MODULE_RULE_PRODUCT = {
    test: RegExp.SASS_AND_SCSS_REG_EXP,
    use: [
        require('mini-css-extract-plugin').loader,
        {
            loader: 'css-loader',
            options: {
                importLoaders: 2
            }
        },
        'resolve-url-loader',
        {
            loader: 'sass-loader',
            options: {
                sourceMap: true
            }
        },
        {
            loader: 'postcss-loader',
            options: {
                sourceMap: true
            }
        }
    ]
};


module.exports = {
    URL_MODULE_RULE, SVG_MODULE_RULE, FILE_MODULE_RULE, WORKER_LOADER_MODULE_RULE,
    BABLE_MODULE_RULE_DEVELOPMENT, BABLE_MODULE_RULE_PRODUCT,
    CSS_MODULE_RULE_DEVELOPMENT, MODULES_CSS_MODULE_RULE_DEVELOPMENT,
    CSS_MODULE_RULE_PRODUCT, MODULES_CSS_MODULE_RULE_PRODUCT,
    SASS_AND_SCSS_MODULE_RULE_DEVELOPMENT, SASS_AND_SCSS_MODULE_RULE_PRODUCT
}