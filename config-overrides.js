const packageName = require('./package.json').name;

module.exports = function override(config, env) {
  config.output.library = `${packageName}-[name]`;
  config.output.libraryTarget = 'umd';
  // config.output.publicPath = '//localhost:3002/';
  
  return config;
}