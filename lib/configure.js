'use strict';

exports.apiKey = '';
exports.apiRoot = '/api/';
exports.apiVersion = 'v1';

var sdkVersion = exports.sdkVersion = require('../package').version;
exports.userAgent = 'OTX Node SDK ' + sdkVersion + ' (node ' + process.version + '-' + process.arch + '-' + process.platform + ')';

exports.default_options = {
  'schema': 'https',
  'host': 'otx.alienvault.com',
  'port': 443,
  'headers': {
    accept: '*/*',
    'Content-Type': 'application/json'
  }
};