'use strict';
var https = require('https');
var querystring = require('querystring');
var configuration = require('./configure');

exports.invoke = function invoke(http_method, path, data, cb) {
  var client = https;
  var request_data = data;

  if (http_method === 'GET') {
    //format object parameters into GET request query string
    if (typeof request_data !== 'string') {
      request_data = querystring.stringify(request_data);
    }
    if (request_data) {
      path = path + '?' + request_data;
      request_data = '';
    }
  } else if (typeof request_data !== 'string') {
    request_data = JSON.stringify(request_data);
  }

  var http_options = configuration.default_options;
  http_options.path = configuration.apiRoot + configuration.apiVersion + path;
  http_options.method = http_method;
  http_options.headers['X-OTX-API-KEY'] = configuration.apiKey;
  http_options.withCredentials = false;

  if (request_data) {
    http_options.headers['Content-Length'] = Buffer.byteLength(request_data, 'utf-8');
  }

  var req = client.request(http_options);
  req.on('error', function error(e) {
    cb(e, null
    );
  });

  req.on('response', function response(res) {
    res.setEncoding('utf8');
    var responseString = '';
    var responseData = {};

    res.on('data', function data(d) {
      responseString += d;
    });

    res.on('end', function end() {
      var err = null;

      try {
        if (typeof res.headers['content-type'] === 'string' &&
          res.headers['content-type'].match(/^application\/json(?:;.*)?$/) !== null) {
          responseData = JSON.parse(responseString);
        }
        //Set response to an empty object if no data was received
        if (responseData === '') {
          responseData = {};
        }
        responseData.httpStatusCode = res.statusCode;
      } catch (e) {
        err = {
          error: 'Invalid JSON Response Received, JSON Parse Error.',
          response: responseData,
          httpStatusCode: res.statusCode
        };
        responseData = null;
      }

      cb(err, responseData);
    });
  });

  if (request_data) {
    req.write(request_data);
  }

  req.end();
};
