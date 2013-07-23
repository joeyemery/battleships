define([
	'backbone',
	'models/AuthModel',
	'views/DashboardView',
	'views/LoginView'
], function(Backbone, AuthModel, DashboardView, LoginView) {

	// Extend backbones router to define our routes.
	var AppRouter = Backbone.Router.extend({
		routes: {
			'dashboard': '/dashboard',

			// Home/unrecognized route.
			'*actions': 'home'
		}
	});

	var initialize = function() {
		// Create a new instance of our AppRouter (defined above).
		var app_router = new AppRouter;

		// Create a new instance of our Auth model.
		var auth_model = new AuthModel;

		// Dashboard route.
		app_router.on('route:/dashboard', function() {
			// Create a new instance of the dashboard view.
			var dashboardView = new DashboardView;
			// Call the render method.
			dashboardView.render();
		});

		// Default/Home route.
		app_router.on('route:home', function(action) {
			// Redirect if the user is logged in.
			if(auth_model.get('loggedin'))
				app_router.navigate('dashboard', {trigger: true});

			// Create a new instance of the home view.
			var homeView = new LoginView;
			// Call the render method.
			homeView.render();
		});

		// Start tracking history.
		Backbone.history.start();
	};

	return {
		initialize: initialize
	};

});