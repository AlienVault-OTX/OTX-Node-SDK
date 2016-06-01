'use strict';

var client = require('../client.js');

module.exports = function pulses() {
  return {
    indicators: indicators,
    related: related,
    details: details,
    subscribed: subscribed,
    activity: activity,
    events: events,
    create: create,
    indicatorsTypes: indicatorsTypes,
    indicatorsValidate: indicatorsValidate,
    user: user
  };

  // Search functions

  function indicators(id, limit, page, cb) {
    var params = [];
    var path = '/pulses/' + id + '/indicators';

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

  function related(id, cb) {
    client.invoke('GET', '/pulses/' + id + '/related', null, cb);
  }

  function details(id, cb) {
    client.invoke('GET', '/pulses/' + id, null, cb);
  }

  function paginatedCall(call, modified_since, limit, page, cb) {
    var params = [];
    var path = '/pulses/' + call;

    if (typeof modified_since === 'function') {
      cb = modified_since;
      modified_since = null;
      limit = null;
      page = null;
    } else {
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
    }
    if (modified_since) {
      params.push('modified_since=' + modified_since);
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

  function subscribed(modified_since, limit, page, cb) {
    paginatedCall('subscribed', modified_since, limit, page, cb);
  }

  function activity(modified_since, limit, page, cb) {
    paginatedCall('activity', modified_since, limit, page, cb);
  }

  function events(modified_since, limit, page, cb) {
    paginatedCall('events', modified_since, limit, page, cb);
  }

  function create(pulse, cb) {
    client.invoke('POST', '/pulses/create', pulse, cb);
  }

  function indicatorsTypes(cb) {
    client.invoke('GET', '/pulses/indicators/types', null, cb);
  }

  function indicatorsValidate(indicator, type, description, cb) {
    var ioc = {
      indicator: indicator,
      type: type
    };
    if (typeof description === 'function') {
      cb = description;
    } else {
      ioc.description = description;
    }
    client.invoke('POST', '/pulses/indicators/validate', ioc, cb);
  }

  function user(username, cb) {
    client.invoke('GET', '/pulses/user/' + username, null, cb);
  }
}
