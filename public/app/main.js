require.config({
  baseUrl: '/app',

  paths: {
    angular: '../vendor/angular/angular',
    bootstrap: '../vendor/bootstrap/dist/js/bootstrap.min',
    uiRouter: '../vendor/angular-ui-router/release/angular-ui-router',
    ngResource: '../vendor/angular-resource/angular-resource',
    uiBootstrap: '../vendor/angular-bootstrap/ui-bootstrap-tpls.min',
    jquery : '../vendor/jquery/dist/jquery.min',
    toastr: '../vendor/toastr/toastr.min',
    angularJwt: '../vendor/angular-jwt/dist/angular-jwt.min',
    localStorage: '../vendor/angular-local-storage/dist/angular-local-storage.min',
    restmod: '../vendor/angular-restmod/dist/angular-restmod-bundle.min',
    uiUtils: '/vendor/ui-utils/ui-utils.min'
  },

  shim: {
    jquery: { exports: '$' },
    bootstrap: { deps: ['jquery'] },
    toastr: { exports: 'toastr' },
    angular: { deps: ['jquery'], exports: 'angular' },
    uiRouter: { deps: ['angular'] },
    uiBootstrap: { deps: ['angular'] },
    uiUtils: { deps: ['angular'] },
    localStorage: { deps: ['angular'] },
    restmod: { deps: ['angular'] },
    angularJwt: { deps: ['angular']},
    ngResource: { deps: ['angular']}
  },

  priority: [
    'angular',
    'app',
  ]
});

require([
    'angular',
    'app',
    'ngResource',
    'restmod',
    'localStorage',
    'angularJwt',
    'core/core.module',
    'account/account.module',
    'home/home.module',
    'admin/admin.module',
    'todo/todo.module'
  ],

// Bootstrap
  function (angular) {
    'use strict';
    angular.element(document).ready(function () {
      angular.bootstrap(document, ['app']);
    });
  });
