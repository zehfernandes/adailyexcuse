(function() {

    var excuseFactory = function($http) {

        var factory = {};
        var data;

        factory.getCustomers = function() {
            if(!data) {
                data = $http.get('/list');
            }

            return data;
        };

        factory.getCustomer = function(excuseId) {
            return $http.get('/list/' + excuseId);
        };

        factory.upvoteOne = function(excuseId) {
            return $http.get('/upvote/' + excuseId);
        };

        return factory;
    };

    excuseFactory.$inject = ['$http'];

    angular.module('dailyApp').factory('excuseFactory', excuseFactory);

}());