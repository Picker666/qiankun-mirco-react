const packageName = require('./package.json').name;

module.exports = function override(config, env) {
  //do stuff with the webpack config...
  return {
    ...config,
    output: {
      ...config.output,
      library: `${packageName}-[name]`,
      libraryTarget: 'umd',
      // jsonpFunction: `webpackJsonp_${packageName}`,
    }
  };
}