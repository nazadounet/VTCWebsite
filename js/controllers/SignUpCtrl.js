app.controller('SignUpCtrl', ['$scope', '$window', 'driversDataManagerFactory', '$mdDialog', '$location', '_', function($scope, $window, driversDataManagerFactory, $mdDialog, $location, _){

    $scope.driverData = {};
/**************************************POP-UP DIALOG SECTION******************************************/
    $scope.showPrerenderedDialogStatus= function(ev) {
        $mdDialog.show({
            contentElement: '#getStatus',
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose: false
        });
    };

    $scope.showPrerenderedDialogEmailUsed = function(ev) {
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
/**************************************POP-UP DIALOG SECTION******************************************/

    $scope.submit = function () {
        if($scope.driverData.email && $scope.driverData.firstname && $scope.driverData.lastname){
            driversDataManagerFactory.driverDataToApi($scope.driverData)
                .then(function (response) {
                    if(response.data.statuCode == 403){
                        $scope.showPrerenderedDialogEmailUsed();
                        console.log(response.data);
                    }else{
                        console.log(response.data);
                        $location.path('/driverSectionFile');
                    }
                }, function (response) {
                    console.log('ctrl error ' , response);
            });
        }else{
            alert('Veuillez remplire tout les champs');
        }
    };

    $scope.checkStatus = function () {
        if($scope.driverData.email){
            driversDataManagerFactory.checkStatusToApi($scope.driverData.email)
                .then(function (response) {
                    console.log(response.data.driverData.status);
                })
        }else(
            console.log("entrer une email valide")
        )
    };

    $scope.cancelEmailUsed = function() {
        $mdDialog.hide();
        $window.location.reload();
    };

    $scope.cancel = function() {
        $mdDialog.hide();
    };


}]);
