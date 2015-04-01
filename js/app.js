(function(){

  var app = angular.module( 'daily', [] );

  app.controller('ExcusesController', ['$http', function($http){    
    var sheet = this;
    sheet.items = [];

    $http.get('./db.json').success(function(data){
      sheet.items = data;
    })
  }]);

})();