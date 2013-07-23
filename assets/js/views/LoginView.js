define([
	'jquery',
	'underscore',
	'backbone',
	'text!../../../templates/login.html'
], function($, _, Backbone, loginTemplate) {

	var LoginView = Backbone.View.extend({
		el: $('#page'),

		events: {
			'submit .login': 'onLoginSubmit'
		},

		onLoginSubmit: function(e) {
			e.preventDefault();
			
			// Do login shizz.
		},

		render: function() {
			// Create a new underscore template from
			// the contents of 'home.html'.
			var template = _.template(loginTemplate);

			// Set the HTML of $el to the template
			// we just created, passing through an
			// object for all the variables.
			this.$el.html(template);

			// Return 'this' to enable chained calls.
			return this;
		}
	});

	return LoginView;

});