const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');
const path = require('path');

module.exports = {
  pluginOptions: {
    electronBuilder: {
      preload: 'src/preload.js'
    }
  },
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.json$/,
          use: 'json-loader',
          type: 'javascript/auto'
        },
        {
          test: /\.(png|jpe?g|gif|svg|pdf)$/i,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[path][name].[ext]',
              }
            }
          ]
        },
        {
          test: /\.(woff(2)?|eot|ttf|otf|bin|ico)(\?v=\d+\.\d+\.\d+)?$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[path][name].[ext]',
              }
            }
          ]
        }
      ]
    },
    plugins: [
      new NodePolyfillPlugin()
    ],
    resolve: {
      fallback: {
        path: require.resolve('path-browserify'),
        fs: false,
        buffer: require.resolve('buffer/'),
        crypto: require.resolve('crypto-browserify'),
        stream: require.resolve('stream-browserify')
      }
    }
  }
};
