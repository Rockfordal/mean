define([
    'app',
    'core/common',
    'core/config',
    'core/mvIdentity',
    'core/mvNotifier',
    'core/mvFilter',
    'core/mvNavbarCtrl'
    ],

  function (app, common, config, mvIdentity, mvNotifier, mvFilter, mvNavbarCtrl) {
    app
      .config(config)
      .constant('routeRoleChecks', common.routeRoleChecks)
      .factory('mvIdentity', mvIdentity)
      .factory('mvNotifier', mvNotifier)
      .factory('mvFilter', mvFilter)
      .controller('mvNavbarCtrl', mvNavbarCtrl);
  });