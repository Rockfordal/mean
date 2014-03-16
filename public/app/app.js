angular.module('app', ['ngResource', 'ngRoute']);

angular.module('app').config(function($routeProvider, $locationProvider){
    $locationProvider.html5Mode(true);
    $routeProvider
        .when('/', { templateUrl: '/app/main/main.ejs', controller: 'mvMainCtrl' })
});


