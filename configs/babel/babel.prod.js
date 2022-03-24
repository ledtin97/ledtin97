const BabelProductionConfigs = {
    only: ['../../src'],
    plugins: require('../utils/plugins').Babel.BABEL_PRODUCTION_PLUGINS
};

module.exports = BabelProductionConfigs;