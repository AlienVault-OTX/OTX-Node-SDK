"use strict";

var https = require('https');
var querystring = require('querystring');
var configuration = require('./configure');

/**
 * Wraps the http client, handles request parameters, populates request headers, handles response
 * @param  {String}   http_method        HTTP Method GET/POST
 * @param  {String}   path               url endpoint
 * @param  {Object}   data               Payload for HTTP Request
 * @param  {Function} cb                 callback function
 */
var invoke = exports.invoke = function invoke(http_method, path, data, cb) {
    var client = https;
    var request_data = data;

    if (http_method === 'GET') {
        //format object parameters into GET request query string
        if (typeof request_data !== 'string') {
            request_data = querystring.stringify(request_data);
        }
        if (request_data) {
            path = path + "?" + request_data;
            request_data = "";
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

    console.log(http_options);

    var req = client.request(http_options);

    req.on('error', (e) => {
      cb(e, null);
    });

    req.on('response', function (res) {
        res.setEncoding('utf8');
        var response = '';

        res.on('data', function (d) {
            response += d;
        });

        res.on('end', function () {
            var err = null;

            try {
                if (typeof res.headers['content-type'] === "string" &&
                    res.headers['content-type'].match(/^application\/json(?:;.*)?$/) !== null) {
                    response = JSON.parse(response);
                }
                //Set response to an empty object if no data was received
                if (response === '') {
                    response = {};
                }
                response.httpStatusCode = res.statusCode;
            } catch (e) {
                err = new Error('Invalid JSON Response Received.');
                err.error = {
                    name: 'Invalid JSON Response Received, JSON Parse Error.'
                };
                err.response = response;
                err.httpStatusCode = res.statusCode;
                response = null;
            }

            cb(err, response);
        });
    });

    if (request_data) {
        req.write(request_data);
    }
    req.end();
};