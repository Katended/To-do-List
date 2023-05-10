const { merge } = require('webpack-merge');// eslint-disable-line import/no-extraneous-dependencies
const commonConfig = require('./webpack.common.js');

const prodconfig = {
  mode: 'production',
};
module.exports = merge(commonConfig, prodconfig);