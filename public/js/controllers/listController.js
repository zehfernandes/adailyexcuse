(function() {

    var ListController = function($scope, $cookies, excuseFactory, appSettings) {
        $scope.excuses = [];
        $scope.appSettings = appSettings;

        function init() {
            excuseFactory.getExcuses()
                .then(function(data) {
                    $scope.excuses = data;

                },
                function(data) {
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
