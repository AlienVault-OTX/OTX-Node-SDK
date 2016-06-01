'use strict';
var configuration = require('./configure');

module.exports = function otxapi(apiKey) {
  if (apiKey !== undefined && typeof apiKey === 'string') {
    configuration.apiKey = apiKey;
  }

  return {
    agent: configuration.userAgent,
    version: configuration.sdkVersion,
    configuration: configuration,
    indicators: require('./resources/Indicators')(),
    pulses: require('./resources/Pulses')(),
    search: require('./resources/Search')(),
    users: require('./resources/Users')()
  };
};
