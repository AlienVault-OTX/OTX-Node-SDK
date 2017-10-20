'use strict';
var client = require('../client.js');

module.exports = function search() {
  return {
    pulses: pulses,
    users: users
  };

  // Search functions

  function invoke(option, query, limit, page, cb) {
    var params = [];
    var path = '/search/' + option;

    if (typeof query !== 'string') {
      return cb('Invalid search query.', null);
    }
    if (option !== 'users' && option !== 'pulses') {
      return cb('Invalid search option.', null);
    }
    if (typeof limit === 'function') {
      cb = limit;
      limit = null;
      page = null;
    } else {
      if (typeof page === 'function') {
        cb = page;
        page = null;
      }
    }

    if (query) {
      params.push('q=' + query);
    }
    if (limit) {
      params.push('limit=' + limit);
    }
    if (page) {
      params.push('page=' + page);
    }
    if (params.length > 0) {
      path += '?' + params.join('&');
    }

    client.invoke('GET', path, null, cb);
  }

  function pulses(query, limit, page, cb) {
    invoke('pulses', query, limit, page, cb);
  }

  function users(query, limit, page, cb) {
    invoke('users', query, limit, page, cb);
  }
};
