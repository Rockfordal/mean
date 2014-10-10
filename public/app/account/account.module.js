define([
    'app',
    'account/mvLoginCtrl',
    'account/mvUser',
    'account/mvAuth',
    'account/mvProfileCtrl',
    'account/mvSignupCtrl'
  ],

  function (app,
            mvLoginCtrl,
            mvUser,
            mvAuth,
            mvProfileCtrl,
            mvSignupCtrl
            ) {

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
            controller:  'mvSignupCtrl'
          })
      })
      .factory('mvAuth', mvAuth)
      .factory('mvUser', mvUser)
      .controller('mvLoginCtrl', mvLoginCtrl)
      .controller('mvProfileCtrl', mvProfileCtrl)
      .controller('mvSignupCtrl', mvSignupCtrl);

    return app

  });