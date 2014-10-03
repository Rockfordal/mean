define([
  'uiRouter',
  'apple/module',
  'apple/base'
], function() {
  'use strict';

  angular.module('app.states.apple', ['ui.router', 'app.apple'])
    .config([
    '$stateProvider',
    '$urlRouterProvider',
    '$urlMatcherFactoryProvider',
    function($stateProvider
//             ,$urlRouterProvider,
//             $urlMatcherFactoryProvider
      ) {

      $stateProvider
        .state('app.apple', {
          url: '/apple',
          templateUrl: 'app/apple/base.html',
          controller: 'Apple.BaseCtrl'
        });
    }
  ]);
});