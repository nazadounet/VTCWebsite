app.factory('driversDataManagerFactory', ['$http', '$q', '_', function($http, $q ,_){

    var driverId;

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
                deferred.resolve(response);
            }, function (err) {
                deferred.reject(err.status);
            })

            return deferred.promise;
        },

        checkStatusToApi : function (data) {
            var email = {"email" : data};
            $http({
                method : 'POST',
                url : 'http://localhost:8888/Api-ti-tak/public/api/v1/getDriverStatus',
                data : email
            })
            .then(function (response) {
                deferred.resolve(response);
            }, function (err) {
                deferred.resolve(err);
            })

            return deferred.promise;
        }
    };

    return factory;

}]);
