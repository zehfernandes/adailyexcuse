(function() {

    var ListController = function($scope, $cookies, excuseFactory, appSettings) {
        $scope.excuses = [];
        $scope.appSettings = appSettings;

        function init() {
            excuseFactory.getExcuses()
                .success(function(data) {
                    $scope.excuses = data.rows;

                    if ($cookies.votes) {

                        var alreadyVoted = $cookies.votes.split('/');
                        alreadyVoted.pop();

                        angular.forEach($scope.excuses, function(value, key) {
                            for (var i in alreadyVoted) {
                                if ($scope.excuses[key].id == alreadyVoted[i]) {
                                    $scope.excuses[key].voted = true;
                                }
                            }
                        });

                    }

                })
                .error(function(data, status, headers, config) {
                    console.log('there was an error');
                });
        }

        init();

        $scope.upvote = function(repeatScope) {
            if (repeatScope.item.voted != true) {

                excuseFactory.upvoteOne(repeatScope.item.id);

                if ($cookies.votes) {
                    $cookies.votes += repeatScope.item.id+'/';
                } else {
                    $cookies.votes = repeatScope.item.id+'/';
                }

                repeatScope.item.votes += 1;
                repeatScope.item.voted = true;

            }
        }
    };

    // If we used Minification, the $scope will get renamed and nothing would work.
    // To Fix: Use Parameter Injection Technique
    // eg. CustomersController.$inject = ['$scope', 'foo', 'bar'];
    ListController.$inject = ['$scope', '$cookies', 'excuseFactory', 'appSettings'];

    // Now we pass the controller off to Angular via the module
    angular.module('dailyApp')
        .controller('ListController', ListController);
}());
