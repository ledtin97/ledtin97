const SPLIT_CHUNKS = {
    chunks: 'all',
    minSize: 0,
    maxInitialRequests: 10,
    maxAsyncRequests: 10,
    cacheGroups: require('./cacheGroups')
};

module.exports = SPLIT_CHUNKS;