define([
  'app',
  'admin/mvUserListCtrl'

], function (app, mvUserListCtrl) {
  'use strict';

  app
    .config(function ($stateProvider, routeRoleChecks) {
      $stateProvider
        .state('useradmin', {
          url:         '/users',
          templateUrl: '/app/admin/users.html',
          controller:  'mvUserListCtrl',
          controllerAs: 'vm',
          resolve:     routeRoleChecks.admin
        });

    })
    .controller('mvUserListCtrl', mvUserListCtrl);

  return app;
});
