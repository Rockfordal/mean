// Imagine that this file was actually compiled with something like grunt-html2js
// So, what you actually started with was a bunch of .html files which were compiled into this one .js file...
define(['angular'], function (angular) {
  angular.module('app.lazy.partials', [])
    .run(function($templateCache) {
      $templateCache.put('about.html', '<p>Om projektet. <strong>{{data}}</strong></p>');
      $templateCache.put('user-list.html', '<div class="container"> <table class="table"> <tr ng-repeat="user in users"> <td>{{user.firstName + " " + user.lastName}}</td> </tr> </table> </div>');
    });
});