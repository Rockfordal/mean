define(['app', 'home/mvHomeCtrl'], function(app, ctrl) {

  app.controller('mvHomeCtrl', ctrl);

  app.config(function ($stateProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: '/app/home/home.html',
        controller: 'mvHomeCtrl'
      });

  });

  return app

});