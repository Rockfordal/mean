define(['app', 'home/mvHomeCtrl'],

  function (app, mvHomeCtrl) {

  app
    .config(function ($stateProvider) {
      $stateProvider
        .state('home', {
          url:         '/',
          templateUrl: '/app/home/home.html',
          controller:  'mvHomeCtrl',
          label: 'Hem'
        });
    })
    .controller('mvHomeCtrl', mvHomeCtrl);
});