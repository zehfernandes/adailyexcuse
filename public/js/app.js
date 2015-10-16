(function() {
    var app = angular.module('dailyApp', ['ngRoute', 'ngAnimate', 'ngCookies']);

    // ----------- ROUTES ------------
    // -------------------------------
    app.config(function($routeProvider) {
        $routeProvider
            .when('/', {
                controller: 'ListController',
                templateUrl: '/js/views/list.html'
            })

            .when('/excuses/:customerId', {
                controller: 'ExcuseController',
                templateUrl: '/js/views/excuse.html'
            })

            .otherwise({ redirectTo: '/' });
    });

}());
