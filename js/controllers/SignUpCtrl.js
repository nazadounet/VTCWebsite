app.controller('SignUpCtrl', ['$scope', 'driversDataManagerFactory', '_', function($scope, driversDataManagerFactory, _){

    $scope.driverData = {};

    $scope.submit = function () {
        if($scope.driverData.email && $scope.driverData.firstname && $scope.driverData.lastname){
            driversDataManagerFactory.driverDataToApi($scope.driverData)
                .then(function (response) {
                    console.log(response);
                }, function (response) {
                    console.log('ctrl error ' , response);
            });
        }else{
            alert('Veuillez remplire tout les champs');
        }
    };

}]);
