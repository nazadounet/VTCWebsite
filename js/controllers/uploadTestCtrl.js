app.controller('UploadTestCtrl', ['$scope', '_', function($scope, Upload, _){

	function l(params){
		console.log(params);
	};

	//$scope.queue = {}

	$scope.var = "queue.VTCCard";
	var reg = $scope.var.substring(6);

	$scope.tableau = [];
	var s = $scope.tableau;

	$scope.addToQueue = function(file, event){


		var lool = event.target.attributes[2].value;
		var drive = 'Drive'

		$scope.tableau[lool] = file;
		$scope.tableau[drive] = file;

		l($scope.tableau.VTC[0].name);


		}
	$scope.delete = function(name){

		for (var key in s) {
				if(s[key][0].name === name){
					delete s[key];
					l('file deleted');
				}
		}
		l(s);
	}




}]);