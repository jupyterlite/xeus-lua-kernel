const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  module: {
    rules: []
  },
  experiments: {
    topLevelAwait: true
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: 'src/xeus_lua.wasm',
          to: '.'
        }
      ]
    })
  ]
};
