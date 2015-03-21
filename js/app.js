(function(){

  var app = angular.module( 'daily', [] );

  app.controller('ExcusesController', function(){
    this.items = excuses;
  });

  var excuses = [
    {
      title: "Desculpa de exemplo 1",
      votes: 171,
    },
    {
      title: "Desculpa de exemplo 2",
      votes: 53,
    },
    {
      title: "Desculpa de exemplo 3",
      votes: 20,
    },
    {
      title: "Desculpa de exemplo 4",
      votes: 5,
    },
    {
      title: "Desculpa de exemplo 5",
      votes: 0,
    },
  ];

})();