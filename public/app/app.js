var app = angular.module('app', ['ngResource', 'ngRoute']);

app.value('mvToastr', toastr);
app.controller('mvTestCtrl', mvTestCtrl);
app.controller('mvNavBarLoginCtrl', mvNavBarLoginCtrl);
app.controller('mvMainCtrl', mvMainCtrl);
app.factory('mvNotifier', mvNotifier);
app.factory('mvIdentity', mvIdentity);

app.config(function ($routeProvider, $locationProvider) {
  $locationProvider.html5Mode(true);
  $routeProvider
    .when('/', {templateUrl: '/app/main/main.ejs', controller: 'mvMainCtrl'});
});


