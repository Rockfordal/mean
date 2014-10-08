 define([
   'angular',
   'uiRouter',
   'uiutils',
   'bootstrap'

 ], function(angular) {

  var app = angular.module('app', [
    'ui.router',
    'ngResource',
  app.config(function ($stateProvider, $locationProvider) {

    $locationProvider.html5Mode(true);
    'ui.keypress'
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
