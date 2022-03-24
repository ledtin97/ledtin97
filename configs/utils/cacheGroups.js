const CACHE_GROUPS = {
    vendors: {
        test: require('./regExp').CACHE_GROUPS_VENDORS_REG_EXP,
        name(module, chunks, cacheGroupKey) {
            const packageName = module.context.match(
                require('./regExp').CACHE_GROUPS_VENDORS_PACKAGE_NAME_REG_EXP
            )[1];
            return `${cacheGroupKey}.${packageName.replace('@', '')}`;
        }
    },
    common: {
        minChunks: 2,
        priority: -10
    }
}

module.exports = CACHE_GROUPS;