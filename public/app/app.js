 define([
   'angular',
   'uiRouter',
   'uiBootstrap',
   'uiutils',
   'bootstrap'

 ], function(angular) {

  var app = angular.module('app', [
    'ui.router',
    'ui.bootstrap',
    'ui.keypress',
    'ngResource'
  ]);

  app.run(function ($rootScope, $state, mvNotifier) {
    $rootScope.$on('$stateChangeError', function (event, toState, fromState, error) {
      if (error) {
        mvNotifier.error('Sorry, you are probably not allowed here');
        $state.go('home');
      }
    })
  });

  return app;
});
