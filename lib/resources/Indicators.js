'use strict';
var client = require('../client.js');

module.exports = function indicators() {
  return {
    ipv4: ipv4,
    ipv6: ipv6,
    domain: domain,
    hostname: hostname,
    file: file,
    url: url,
    cve: cve
  };

  // Indicators functions

  function iocRequest(type, ioc, section, cb) {
    client.invoke('GET', '/indicators/' + type + '/' + ioc + '/' + section, null, cb);
  }

  function ipv4(ioc, section, cb) {
    iocRequest('ipv4', ioc, section, cb);
  }

  function ipv6(ioc, section, cb) {
    iocRequest('ipv6', ioc, section, cb);
  }

  function domain(ioc, section, cb) {
    iocRequest('domain', ioc, section, cb);
  }

  function hostname(ioc, section, cb) {
    iocRequest('hostname', ioc, section, cb);
  }

  function file(ioc, section, cb) {
    iocRequest('file', ioc, section, cb);
  }

  function url(ioc, section, cb) {
    iocRequest('url', ioc, section, cb);
  }

  function cve(ioc, section, cb) {
    iocRequest('cve', ioc, section, cb);
  }

}
