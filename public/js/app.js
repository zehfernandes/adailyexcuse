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
            $scope.activeTabs.push(tab);
        }
    }

  });

  var overlay     = document.querySelector( 'div.overlay' ),
      $_closeBttn = overlay.querySelector( '.overlay-close' ),
      generate    = true,
      currentExpression;

  function toggleOverlay(event) {
      if( classie.has( overlay, 'open' ) ) {
          classie.remove( overlay, 'open' );
          classie.add( overlay, 'close' );
          var onEndTransitionFn = function( ev ) {
              if( support.transitions ) {
                  if( ev.propertyName !== 'visibility' ) return;
                  this.removeEventListener( transEndEventName, onEndTransitionFn );
              }
              classie.remove( overlay, 'close' );
          };
          if( support.transitions ) {
              overlay.addEventListener( transEndEventName, onEndTransitionFn );
          }
          else {
              onEndTransitionFn();
          }
      }
      else if( !classie.has( overlay, 'close' ) ) {
          classie.add( overlay, 'open' );
      }

      event.preventDefault();
  }

  document.getElementById( 'trigger-overlay' ).addEventListener( 'click', toggleOverlay );

})();
