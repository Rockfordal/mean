define([
    'app',
    'core/common',
    'core/config',
    'core/mvIdentity',
    'core/mvNotifier'
    ],

  function (app, common, config, mvIdentity, mvNotifier) {

    app
      .config(config)
      .constant('routeRoleChecks', common.routeRoleChecks)
      .factory('mvIdentity', mvIdentity)
      .factory('mvNotifier', mvNotifier);
  });