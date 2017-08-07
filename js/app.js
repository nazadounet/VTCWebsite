var app = angular.module('myApp', ['ngRoute', 'ngMaterial', 'ui.bootstrap', 'angularFileUpload']);

app.constant('_', window._)

app.config(['$routeProvider', function($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: 'partials/home.html',
		})
		.when('/driverSection', {
			templateUrl: 'partials/driverSection.html',
		})
		.when('/testUpload', {
			templateUrl: 'partials/testUpload.html',
		})

		.otherwise({redirectTo: '/'});
}]);

  // use in views, ng-repeat="x in _.range(3)"
 app.run(function ($rootScope) {
     $rootScope._ = window._;
  });