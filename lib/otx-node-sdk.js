"use strict";

var configuration = require('./configure');

module.exports = function otxapi(apiKey) {
	if (apiKey !== undefined && typeof apiKey === 'string') {
        configuration.apiKey = apiKey;
    }

    return {
        agent: configuration.userAgent,
        version: configuration.sdkVersion,
        configuration: configuration,
        search: require('./resources/Search')(),
        users: require('./resources/Users')(),
        pulses: require('./resources/Pulses')()
    };
};
