app.controller('UploadTestCtrl', ['$scope', '_', '$mdDialog', '$location', function($location, $scope, Upload, $mdDialog, _){


    $scope.showPrerenderedDialog = function() {
       $location.path("#!/driverSectionFile");
    };
	 $scope.showPrerenderedDialogSignUp= function(ev) {
			$mdDialog.show({
				contentElement: '#signUp',
				parent: angular.element(document.body),
				targetEvent: ev,
				clickOutsideToClose: false
			});
		};

	$scope.showPrerenderedDialogStatus= function(ev) {
				$mdDialog.show({
					contentElement: '#getStatus',
					parent: angular.element(document.body),
					targetEvent: ev,
					clickOutsideToClose: false
				});
			};

    $scope.cancel = function() {
        $mdDialog.cancel();
    };


}]);