define(['app', 'home/mvHomeCtrl'],

  function (app, mvHomeCtrl) {

  app
    .config(function ($stateProvider) {
      $stateProvider
        .state('home', {
          url:         '/',
          templateUrl: '/app/home/home.html',
          controller:  'mvHomeCtrl',
          controllerAs: 'home',
          label: 'Hem',
          labelprio: 10
        });
    })
    .controller('mvHomeCtrl', mvHomeCtrl);
});