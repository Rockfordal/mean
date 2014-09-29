var app = angular.module('app', ['ngResource', 'ngRoute']);

app.value('mvToastr', toastr);
app.controller('mvNavBarLoginCtrl', mvNavBarLoginCtrl);
app.controller('mvMainCtrl', mvMainCtrl);
app.controller('mvProfileCtrl', mvProfileCtrl);
app.factory('mvNotifier', mvNotifier);
app.factory('mvIdentity', mvIdentity);
app.factory('mvAuth', mvAuth);
app.factory('mvUser', mvUser);
app.factory('mvUserListCtrl', mvUserListCtrl);

app.config(function ($routeProvider, $locationProvider) {
  var routeRoleChecks = {
    admin: {auth:
      function (mvAuth) {
        return mvAuth.authorizeCurrentUserForRoute('admin')
    }},
    user: {auth:
      function (mvAuth) {
        mvAuth.authoriseAuthenticatedUserForRoute()
    }}
  };

  $locationProvider.html5Mode(true);
  $routeProvider
    .when('/', {templateUrl: '/app/main/main.html', controller: 'mvMainCtrl'})
    .when('/admin/users', {templateUrl: '/app/admin/user-list.html',
      controller: 'mvUserListCtrl', resolve: routeRoleChecks.admin
    })
    .when('/signup', {templateUrl: '/app/account/signup.html',
      controller: 'mvSignupCtrl' })
    .when('/profile', {templateUrl: '/app/account/profile.html',
      controller: 'mvProfileCtrl', resolve: routeRoleChecks.user });
});

app.run(function ($rootScope, $location) {
  $rootScope.$on('$routeChangeError', function (evt, current, previous, rejection) {
    if (rejection === 'not authorized') {
      $location.path('/');
    }
  })
});