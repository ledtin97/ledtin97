const BabelConfigs = {
  presets: require('../utils/presets'),
  plugins: require('../utils/plugins').Babel.BABEL_COMMON_PLUGINS,
  env: {
    production: require('./babel.prod')
  }
}
module.exports = BabelConfigs;