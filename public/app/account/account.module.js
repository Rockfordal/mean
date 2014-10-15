define([
    'app',
    'account/mvLoginCtrl',
    'account/mvUser',
    'account/mvAuth',
    'account/mvAuthInterceptor',
    'account/mvProfileCtrl',
    'account/mvSignupCtrl'
  ],

  function (app,
            mvLoginCtrl,
            mvUser,
            mvAuth,
            mvAuthInterceptor,
            mvProfileCtrl,
            mvSignupCtrl
            ) {
    'use strict';

    app
      .config(function ($stateProvider, routeRoleChecks) {

        $stateProvider
          .state('profile', {
            url:         '/profile',
            templateUrl: '/app/account/profile.html',
            controller:  'mvProfileCtrl',
            controllerAs: 'profile',
            resolve: routeRoleChecks.user
          })
          .state('signup', {
            url:         '/signup',
            templateUrl: '/app/account/signup.html',
            controller:  'mvSignupCtrl',
            controllerAs: 'signup'
          });
      })
      .factory('mvAuth', mvAuth)
      .factory('mvUser', mvUser)
      .factory('authInterceptor', mvAuthInterceptor)
      .controller('mvLoginCtrl', mvLoginCtrl)
      .controller('mvProfileCtrl', mvProfileCtrl)
      .controller('mvSignupCtrl', mvSignupCtrl)
      .config(function ($httpProvider) {
        $httpProvider.interceptors.push('authInterceptor');
    });

    return app;

  });