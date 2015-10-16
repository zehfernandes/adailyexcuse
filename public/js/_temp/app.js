(function(){

  var app = angular.module( 'daily', [] );

  app.controller('ExcusesController', ['$http', function($http){
    var excuses = this;
    excuses.items = [];

    $http.get('/list').success(function(response){
      excuses.items = response.rows;
    })

  } ]);

})();