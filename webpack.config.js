const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
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
