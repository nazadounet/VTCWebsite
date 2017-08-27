app.controller('SignUpCtrl', ['$scope', 'driversDataManagerFactory', '$mdDialog', '$location', '_', function($scope, driversDataManagerFactory, $mdDialog, $location, _){

    $scope.driverData = {};

    $scope.showPrerenderedDialogStatus= function(ev) {
        $mdDialog.show({
            contentElement: '#getStatus',
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose: false
        });
    };

    $scope.showPrerenderedDialog = function(ev) {
        $mdDialog.show({
            contentElement: '#emailAlert',
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose: true
        });
    };

    $scope.showPrerenderedDialogSignUp= function(ev) {
        $mdDialog.show({
            contentElement: '#signUp',
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose: false
        });
    };

    $scope.submit = function () {
        if($scope.driverData.email && $scope.driverData.firstname && $scope.driverData.lastname){
            driversDataManagerFactory.driverDataToApi($scope.driverData)
                .then(function (response) {
                    if(response.data.statuCode == 403){
                        $scope.showPrerenderedDialog();
                        console.log(response.data);
                    }else{
                        console.log(response.data);
                        $location.path('#!/driverSectionFile');
                    }
                }, function (response) {
                    console.log('ctrl error ' , response);
            });
        }else{
            alert('Veuillez remplire tout les champs');
        }
    };

    $scope.cancel = function() {
        $mdDialog.hide();
    };


}]);
