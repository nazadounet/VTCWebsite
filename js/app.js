var app = angular.module('myApp', ['ngRoute', 'ngMaterial', 'ui.bootstrap', 'angularFileUpload']);

app.config(['$routeProvider', function($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: 'partials/home.html',
		})
		.when('/driverSection', {
			templateUrl: 'partials/driverSection.html',
		})

		.otherwise({redirectTo: '/'});
}]);