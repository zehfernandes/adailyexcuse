(function(){

  var app = angular.module( 'daily', [] );

  app.controller('ExcusesController', ['$http', function($http){
    var excuses = this;
    excuses.items = [];

    $http.get('/list').success(function(response){
      excuses.items = response;
    })

  } ]);

  app.controller('PagesController', function(){
    this.index = 0;

    this.selectIndex = function(setIndex) {
      this.index = setIndex;      
    };
    console.log(this.index);
    this.isSelected = function(checkIndex) {
      return this.index === checkIndex;
    };

  });

})();