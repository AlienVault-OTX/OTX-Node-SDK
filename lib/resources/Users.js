'use strict';

var client = require('../client.js');

module.exports = function users() {
  return {
    me: me,
    action: userAction,
    follow: follow,
    unfollow: unfollow,
    subscribe: subscribe,
    unsubscribe: unsubscribe
  };

  // Search functions

  function me(cb) {
    client.invoke('GET', '/users/me', null, cb);
  }

  function follow(username, cb) {
    userAction('follow', username, cb);
  }

  function unfollow(username, cb) {
    userAction('unfollow', username, cb);
  }

  function subscribe(username, cb) {
    userAction('subscribe', username, cb);
  }

  function unsubscribe(username, cb) {
    userAction('unsubscribe', username, cb);
  }

  function userAction(action, username, cb) {
    client.invoke('POST', '/users/' + username + '/' + action, null, cb);
  }
};
