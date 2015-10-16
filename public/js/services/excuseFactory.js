(function() {

    var excuseFactory = function($http) {

        var factory = {};

        factory.getCustomers = function() {
            // return the promise so controller handles it
            return $http.get('/list');
        };

        factory.getCustomer = function(customerId) {
            return $http.get('/list/' + customerId);
        };

        factory.upvoteOne = function(customerId) {
            return $http.get('/upvote/' + customerId);
        };

        return factory;
    };

    excuseFactory.$inject = ['$http'];

    angular.module('dailyApp').factory('excuseFactory', excuseFactory);

}());