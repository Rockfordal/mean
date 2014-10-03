define([
  'uiRouter',
  'core/controllers/home'
], function() {
  'use strict';

  angular.module('app.states.core', [
    'ui.router'
  ]).config([
    '$stateProvider',
    '$urlRouterProvider',
    '$urlMatcherFactoryProvider',
    function($stateProvider,
         $urlRouterProvider,
         $urlMatcherFactoryProvider
      ) {

      $stateProvider
        .state('app', {
          abstract: true,
          template: '<ui-view/>'
        })
        .state('app.home', {
          url: '/',
          templateUrl: '/app/main/main.html',
          controller: 'HomeCtrl'
        });
    }
  ]);
});