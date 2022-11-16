const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: 'src/xlua_wasm.wasm',
          to: '.'
        },
        {
          from: 'src/xlua_wasm.js',
          to: '.'
        }
      ]
    })
  ]
};
