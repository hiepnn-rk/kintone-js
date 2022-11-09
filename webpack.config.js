const path = require('path');

module.exports = (env = {}) => {
  return {
    entry: {
      'index.min': './src/index.js'
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].js',
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          include: [require.resolve('@kintone/kintone-js-sdk')],
          use: {
            loader: 'babel-loader'
          },
        }
      ]
    },
    watch: env.watch
  };
};
