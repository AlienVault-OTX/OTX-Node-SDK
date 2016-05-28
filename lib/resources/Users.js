"use strict";

var client = require('../client.js');

module.exports = function users() {
    return {
        me: me,
        action: action,
        follow: follow,
        unfollow: unfollow,
        subscribe: subscribe,
        unsubscribe: unsubscribe
    };

    // Search functions
    
    function me(cb) {
		client.invoke('GET', '/users/me', null, cb);
    }

    function action(action, username, cb) {
    	client.invoke('POST', '/users/' + username + '/' + action, null, cb);
    }

	function follow(username, cb) {
		action('follow', username, cb);
	}

	function unfollow (username, cb) {
		action('unfollow', username, cb);
	}

	function subscribe(username, cb) {
		action('subscribe', username, cb);
	}

	function unsubscribe(username, cb) {
		action('unsubscribe', username, cb);
	}
}
