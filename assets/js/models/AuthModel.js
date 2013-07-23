define([
	'underscore',
	'backbone'
], function(_, Backbone) {
	
	var AuthModel = Backbone.Model.extend({
		defaults: {
			loggedIn: false,
			userid: null,
			username: null,
			password: null
		},

		initialize: function() {
			this.bind('change:userid', this.onUserIdChange, this);
			this.set({'userid':localStorage.getItem('userid')});
		},

		onUserIdChange: function() {
			this.set({'loggedin': !!userid});
		},

		setUser: function(userid, username, password) {
			localStorage.setItem('userid', userid);
			localStorage.setItem('username', username);
			localStorage.setItem('password', password);
			this.set({'userid':userid, 'username': username, 'password': password});
		}
	});

	return AuthModel;

});