var app = angular.module('app', ['ngResource', 'ngRoute']);

app.controller('mvTestCtrl', mvTestCtrl);
app.controller('mvNavBarLoginCtrl', mvNavBarLoginCtrl);
app.controller('mvMainCtrl', mvMainCtrl);

app.config(function ($routeProvider, $locationProvider) {
  $locationProvider.html5Mode(true);
  $routeProvider
    .when('/', { templateUrl: '/app/main/main.ejs', controller: 'mvMainCtrl' });
});
