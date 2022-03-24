const URL_REG_EXP = new RegExp(/\.(png|jpg|gif|ico)$/i);
const SVG_REG_EXP = new RegExp(/\.svg$/);
const FILE_REG_EXP = new RegExp(/\.(eot|otf|ttf|woff|woff2)$/);
const WORKER_REG_EXP = new RegExp(/\.worker\.js$/);
const BABLE_REG_EXP = new RegExp(/\.(js|jsx)?$/);
const CSS_REG_EXP = new RegExp(/\.css$/);
const MODULE_CSS_REG_EXP = new RegExp(/\.module.css$/);
const SASS_AND_SCSS_REG_EXP = new RegExp(/\.s[ac]ss$/);
const NODE_MODULES_REG_EXP = new RegExp(/node_modules/);
const CACHE_GROUPS_VENDORS_REG_EXP = new RegExp(/[\\/]node_modules[\\/]/);
const CACHE_GROUPS_VENDORS_PACKAGE_NAME_REG_EXP = new RegExp(/[\\/]node_modules[\\/](.*?)([\\/]|$)/);

module.exports = {
    URL_REG_EXP, SVG_REG_EXP, FILE_REG_EXP, WORKER_REG_EXP,
    BABLE_REG_EXP, CSS_REG_EXP, MODULE_CSS_REG_EXP, SASS_AND_SCSS_REG_EXP,
    NODE_MODULES_REG_EXP, CACHE_GROUPS_VENDORS_REG_EXP,
    CACHE_GROUPS_VENDORS_PACKAGE_NAME_REG_EXP
}