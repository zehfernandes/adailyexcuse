(function() {

    var ExcuseController = function($scope, $routeParams, excuseFactory) {

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

    };

    ExcuseController.$inject = ['$scope', '$routeParams', 'excuseFactory'];

    angular.module('dailyApp')
        .controller('ExcuseController', ExcuseController);
}());
