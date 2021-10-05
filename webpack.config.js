module.exports = {
  module: {
    rules: [{ test: /xeus_lua/, type: 'asset/resource' }]
  },
  experiments: {
    topLevelAwait: true,
    asyncWebAssembly: true
  }
};
