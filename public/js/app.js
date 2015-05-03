(function(){

  var app = angular.module( 'daily', [] );

  app.controller('ExcusesController', ['$http', function($http){
    var excuses = this;
    excuses.items = [];

    $http.get('/list').success(function(response){
      excuses.items = response;
    })

  } ]);

  app.controller('myCtrl', function($scope) {
    //initiate an array to hold all active tabs
    $scope.activeTabs = [];
 
    //check if the tab is active
    $scope.isOpenTab = function (tab) {
        //check if this tab is already in the activeTabs array
        if ($scope.activeTabs.indexOf(tab) > -1) {
            //if so, return true
            $scope.activeTabs.indexOf(tab).className += " active"
            return true;
        } else {
            //if not, return false
            return false;
        }
    }
 
    //function to 'open' a tab
    $scope.openTab = function (tab) {
        //check if tab is already open
        if ($scope.isOpenTab(tab)) {
            //if it is, remove it from the activeTabs array
            $scope.activeTabs.splice($scope.activeTabs.indexOf(tab), 1);
        } else {
            //if it's not, add it!
            ;
            $scope.activeTabs.push(tab);
        }
    }
  });

})();