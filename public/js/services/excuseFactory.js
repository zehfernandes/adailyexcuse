(function() {

    var excuseFactory = function($http) {

        var factory = {};
        var data;

        factory.getExcuses = function() {
            if(!data) {
                data = $http.get('/list');
            }

            return data;
        };

        factory.getExcuse = function(excuseId) {
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