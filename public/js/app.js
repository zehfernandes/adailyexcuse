(function() {
    var app = angular.module('dailyApp', ['ngRoute', 'ngCookies', 'ngSanitize']);
    var about = document.getElementsByClassName('overlay');

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
        return function (input) {
            input = encodeURIComponent(input);
            return input.replace(/%3Cbr%3E/g, "%0D%0A");
        }
    });

    // ----------- ABOUT ------------
    // -------------------------------
    document.getElementById('trigger-overlay').addEventListener('click', function () {
        about[0].classList.add('open');
    });

    document.getElementsByClassName('overlay-close')[0].addEventListener('click', function () {
        about[0].classList.remove('open');
    });

}());
