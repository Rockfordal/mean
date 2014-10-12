define([
    'app',
    'core/common',
    'core/config',
    'core/mvIdentity',
    'core/mvNotifier',
    'core/mvNavbarCtrl'
    ],

  function (app, common, config, mvIdentity, mvNotifier, mvNavbarCtrl) {
    app
      .config(config)
      .constant('routeRoleChecks', common.routeRoleChecks)
      .factory('mvIdentity', mvIdentity)
      .factory('mvNotifier', mvNotifier)
      .controller('mvNavbarCtrl', mvNavbarCtrl);
  });