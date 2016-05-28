"use strict";

var apiKey = exports.apiKey = '';
var apiRoot = exports.apiRoot = '/api/';
var apiVersion = exports.apiVersion = 'v1';
var sdkVersion = exports.sdkVersion = require('../package').version;
var userAgent = exports.userAgent = 'OTX Node SDK ' + sdkVersion + ' (node ' + process.version + '-' + process.arch + '-' + process.platform  + ')';

var default_options = exports.default_options = {
    'schema': 'https',
    'host': 'otx.alienvault.com',
    'port': 443,
    'headers': {
    	accept: '*/*',
        'Content-Type': 'application/json'
    }
};