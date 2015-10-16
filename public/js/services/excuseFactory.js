(function() {

    var excuseFactory = function($http, $q, $cookies) {

        var factory = {};
        var data;

        function checkCookie(d) {
             if ($cookies.votes) {

                var alreadyVoted = $cookies.votes.split('/');
                alreadyVoted.pop();
                angular.forEach(d, function(value, key) {
                    for (var i in alreadyVoted) {
                        if (d[key].id == alreadyVoted[i]) {
                            d[key].voted = true;
                        }
                    }
                });
            }

            return d;
        };

        factory.getExcuses = function() {
            var def = $q.defer();

            $http.get("/list")
                .success(function(d) {
                    data = checkCookie(d.rows);
                    def.resolve(data);
                })
                .error(function() {
                    def.reject("Failed");
                });

            return def.promise;
        };

        factory.getExcuse = function(excuseId) {

            var def = $q.defer();

            $http.get('/list/' + excuseId)
                .success(function(d) {
                    data = checkCookie({ d });

                    def.resolve(data.d);
                })
                .error(function() {
                    def.reject("Failed");
                });

            return def.promise;
        };

        factory.upvoteOne = function(excuseId) {
            return $http.get('/upvote/' + excuseId);
        };

        return factory;
    };

    excuseFactory.$inject = ['$http', '$q', '$cookies'];

    angular.module('dailyApp').factory('excuseFactory', excuseFactory);

}());