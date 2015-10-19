(function() {
    var app = angular.module('dailyApp', ['ngRoute', 'ngCookies']);

    // ----------- ROUTES ------------
    // -------------------------------
    app.config(function($routeProvider) {
        $routeProvider
            .when('/', {
                controller: 'ListController',
                templateUrl: '/js/views/list.html'
            })

            .when('/excuses/:excuseId', {
                controller: 'ExcuseController',
                templateUrl: '/js/views/excuse.html',
            })

            .otherwise({ redirectTo: '/' });
    });

    // ----------- FILTERS ------------
    // -------------------------------
    app.filter('encodeURIComponent', function() {
        return window.encodeURIComponent;
    });

}());
