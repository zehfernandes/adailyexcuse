(function() {

    var ExcuseController = function($scope, $cookies, $routeParams, excuseFactory) {

        var excuseId = $routeParams.excuseId;
        $scope.excuse = null;

        function init() {
            excuseFactory.getExcuse(excuseId)
                .then(function(data) {
                    $scope.excuse = { data };
                },
                function(data) {
                    console.log('there was an error');
                });

            var clipboard = new Clipboard('.copytext');

        }

        init();

         $scope.upvote = function(repeatScope) {
            if (repeatScope.excuse.voted != true) {

                excuseFactory.upvoteOne(repeatScope.excuse.id);

                if ($cookies.votes) {
                    $cookies.votes += repeatScope.excuse.id+'/';
                } else {
                    $cookies.votes = repeatScope.excuse.id+'/';
                }

                repeatScope.excuse.votes += 1;
                repeatScope.excuse.voted = true;

            }
        }

    };

    ExcuseController.$inject = ['$scope', '$cookies', '$routeParams', 'excuseFactory'];

    angular.module('dailyApp')
        .controller('ExcuseController', ExcuseController);
}());
