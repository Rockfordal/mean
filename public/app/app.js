//'uiRouterExtrasStatevis',
define([
  'angular',
  'uiRouter',
  'uiRouterExtras',
  'ocLazyLoad',
  'core/module',
  'core/services/settings',
  'states/core'
], function (angular) {
  'use strict';

//  'ct.ui.router.extras.examples.statevis',
  return angular.module('app',
    [
      'ui.router',
      'ct.ui.router.extras',
      'oc.lazyLoad',
      'app.core',
      'app.states.core'
    ]).config(function($ocLazyLoadProvider,
         $futureStateProvider,
         SettingsServiceProvider,
         $locationProvider) {

      $locationProvider.html5Mode(true);

        $ocLazyLoadProvider.config ({
//          debug: true,
          jsLoader: requirejs,
          loadedModules: ['app'],
          modules: [
          {
            reconfig: true,
            name: 'app.states.apple',
            files: ['states/apple']
          }]
        });

        var ocLazyLoadStateFactory = function ($q, $ocLazyLoad, futureState) {
          var deferred = $q.defer();
          $ocLazyLoad.load(futureState.module).then(function(name) {
            deferred.resolve();
          }, function() {
            deferred.reject();
          });
          return deferred.promise;
        };

        $futureStateProvider.stateFactory('ocLazyLoad', ocLazyLoadStateFactory);

        $futureStateProvider.addResolve(function ($injector) {
          /**
           * NOTE: resolves can be used for determining
           * which future states you actually want.
           * Here, we register both apples and oranges.
           * Try uncommenting the if/else to see
           * the magic of provider injected logic
           *
           * Important thing to remember: in addResolve, you have
           * to "return" the thenable promise chain if you want it
           * to actually wait on your provider's resolution.
           */
          return $injector.invoke(SettingsServiceProvider.fruit).then(
            function (fruitResult) {
              //console.log('locading futurestate for apple');
              //if (fruitResult === 'oranges') {

//              $futureStateProvider.futureState({
//                'stateName': 'app.orange',
//                'urlPrefix': '/orange',
//                'type': 'ocLazyLoad',
//                'module': 'app.states.orange'
//              });

              //} else if (fruitResult === 'apples') {
              $futureStateProvider.futureState({
                'stateName': 'app.apple',
                'urlPrefix': '/apple',
                'type': 'ocLazyLoad',
                'module': 'app.states.apple'
              });
              //}
            }
          );
        });
      });
});

/*
  app.config(function($stateProvider, $locationProvider, $urlRouterProvider, $ocLazyLoadProvider) {
//    $urlRouterProvider.otherwise("/");
//    $locationProvider.hashPrefix('!');

//      var routeRoleChecks = {
//        admin: {auth:
//          function (mvAuth) {
//            return mvAuth.authorizeCurrentUserForRoute('admin')
//          }},
//        user: {auth:
//          function (mvAuth) {
//            mvAuth.authorizeAuthenticatedUserForRoute()
//          }}
//      };

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: '/app/main/main.html',
        controller: 'mvMainCtrl'
//        views: {
//          "lazyLoadView": {
//            templateUrl: '/app/main/main.html'
//          }
//        }
      })
      .state('about', {
        url: '/about',
        views: {
          "lazyLoadView": {
            templateUrl: '/app/about/about.html'
          }
        },
        resolve: {
          loadabout: ['$ocLazyLoad', function($ocLazyLoad) {
            return $ocLazyLoad.load({
              name: 'app',
              files: ['/app/about/mvAboutCtrl.js']
            });
          }]
        }

//      .state('about', {
//        url: '/about',
//        lazyModule: 'app.about',
//        lazyTemplateUrl: 'about.html',
//        lazyFiles: 'about/mvAboutCtrl',
//        controller: 'mvAboutCtrl'
//      })
//      .state('userlist', {
//        url: '/users',
//        lazyModule: 'app.userlist',
//        lazyTemplateUrl: 'userlist.html',
//        lazyFiles: 'user/mvUserlistCtrl',
//        controller: 'mvUserlistCtrl'
      });

      //resolve: routeRoleChecks.admin

    $locationProvider.html5Mode(true);

    $ocLazyLoadProvider.config({
//      loadedModules: ['app'],
//      asyncLoader: require
      jsLoader: requirejs,
      debug: true
//      asyncLoader: $script
    });

//      .state('signup', { url: '/signup', templateUrl: '/app/account/signup.html',
//        controller: 'mvSignupCtrl' })
//      .state('profile', { url: '/profile', templateUrl: '/app/account/profile.html',
//        controller: 'mvProfileCtrl', resolve: routeRoleChecks.user });
  });

  app.controller('mvMainCtrl', function($scope) {
    $scope.courses = [
      { name: 'C#', featured: true, published: new Date('2014-01-01') },
      { name: 'Ruby', featured: true, published: new Date('2014-02-01') },
      { name: 'Python', featured: true, published: new Date('2014-03-01') }
    ]
  });

});

// 'ngResource', 'ui.router', 'ui.keypress']
//.value('mvToastr', toastr);
//.controller('mvNavBarLoginCtrl', mvNavBarLoginCtrl);
//.controller('mvProfileCtrl', mvProfileCtrl);
//.factory('mvNotifier', mvNotifier);
//.factory('mvIdentity', mvIdentity);
//.factory('mvAuth', mvAuth);

//.run(function ($rootScope, $state, mvNotifier) {
//  $rootScope.$on('$stateChangeError', function (event, toState, fromState, error) {
//    if (error) {
//      mvNotifier.error('Sorry, you are probably not allowed here');
//      $state.go('home');
//    }
//  })
//});
 */