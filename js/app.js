(function(){

  var app = angular.module( 'daily', [] );

  app.controller('ExcusesController', ['$http', function($http){    
    var excuses = this;
    excuses.items = [];   

    $http.get('./db.json').success(function(response){
      excuses.items = response.data;      
    })

  } ]);

})();