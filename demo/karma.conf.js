const webpack = require('webpack');
const webpackConfig = require('./webpack.config');
const CheckFilenamePlugin = require('../src/index.js'); // use inside the npm package
const checkFilenameSettings = require('./util/check-filename-settings.js');

module.exports = function(config) {
  config.set({
    browsers: ['PhantomJS', 'Chrome'],
    singleRun: true,
    frameworks: ['jasmine'],
    files: [
      './node_modules/phantomjs-polyfill/bind-polyfill.js',
      'tests.webpack.js'
    ],
    preprocessors: {
      'tests.webpack.js': ['webpack', 'sourcemap']
    },
    webpack: {
      devtool: 'inline-sourcemap',
      resolve: webpackConfig.resolve, // get from main webpack config
      module: {
        loaders: webpackConfig.module.loaders, // get from main webpack config
      },
      watch: true,
      plugins: [
        new webpack.DefinePlugin({
          __ENV__: JSON.stringify('dev') // always test in 'dev' environment
        }),
        new CheckFilenamePlugin(checkFilenameSettings)
      ],
    },
    webpackServer: {
      noInfo: true
    }
  });
};
