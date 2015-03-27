(function(){

  var app = angular.module( 'daily', [] );

  app.controller('ExcusesController', ['$http', function($http){    
    var sheet = this;
    sheet.items = [];

    $http.get('https://spreadsheets.google.com/feeds/list/15YLkKhzlKtB4djYpGyYStBGteiLCKyG9ApsPkEzspy4/od6/public/basic?alt=json-in-script&callback=importGSS').success(function(data){
      sheet.items = data;
    })
  }]);

  function importGSS(json) {
    console.log('finished');
  }

})();