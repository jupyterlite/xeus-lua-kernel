module.exports = {
  module: {
    rules: [
      { test: /xeus_lua$/, type: 'asset/resource' },
      { test: /raw/, type: 'asset/source' }
    ]
  },
  experiments: {
    topLevelAwait: true,
    asyncWebAssembly: true
  }
};
