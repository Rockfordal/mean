var app = angular.module('app', ['ngResource', 'ui.router', 'ui.keypress']);

app.value('mvToastr', toastr);
app.controller('mvNavBarLoginCtrl', mvNavBarLoginCtrl);
app.controller('mvMainCtrl', mvMainCtrl);
app.controller('mvProfileCtrl', mvProfileCtrl);
app.factory('mvNotifier', mvNotifier);
app.factory('mvIdentity', mvIdentity);
app.factory('mvAuth', mvAuth);
app.factory('mvUser', mvUser);
app.factory('mvUserListCtrl', mvUserListCtrl);

app.config(function ($stateProvider, $locationProvider) {
  var routeRoleChecks = {
    admin: {auth:
      function (mvAuth) {
        return mvAuth.authorizeCurrentUserForRoute('admin')
    }},
    user: {auth:
      function (mvAuth) {
        mvAuth.authorizeAuthenticatedUserForRoute()
    }}
  };

  $locationProvider.html5Mode(true);
  $stateProvider
    .state('home', {url: '/', templateUrl: '/app/main/main.html', controller: 'mvMainCtrl'})
    .state('useradmin', { url: '/admin/users', templateUrl: '/app/admin/user-list.html',
                          controller: 'mvUserListCtrl', resolve: routeRoleChecks.admin })
    .state('signup', { url: '/signup', templateUrl: '/app/account/signup.html',
                       controller: 'mvSignupCtrl' })
    .state('profile', { url: '/profile', templateUrl: '/app/account/profile.html',
      controller: 'mvProfileCtrl', resolve: routeRoleChecks.user });
});

app.run(function ($rootScope, $state, mvNotifier) {
  $rootScope.$on('$stateChangeError', function (event, toState, fromState, error) {
    if (error) {
      mvNotifier.error('Sorry, you are probably not allowed here');
      $state.go('home');
    }
  })
});