app.factory('driversDataManagerFactory', ['$http', '$q', '_', function($http, $q ,_){

    var deferred = $q.defer();

    var factory = {

        driverDataToApi : function (data) {
            var driverProfil = {
                "firstname" : data.firstname,
                "lastname" : data.lastname,
                "email" : data.email
            }

            $http({
                method : 'POST',
                url : 'http://localhost:8888/Api-ti-tak/public/api/v1/driverProfil',
                data : driverProfil
            })
                .then(function (response) {
                    console.log(response);
                    deferred.resolve(response);
                }, function (err) {
                    deferred.reject(err.status);
                })

            return deferred.promise;
        }

    };

    return factory;

}]);
