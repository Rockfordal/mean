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
    ngResource: { deps: ['angular']}
  },

  priority: [
    'uiRouter',
    'angular',
    'uiBootstrap',
    'app',
    'ngResource',
    'account/index'
  ]
});

require([
    'angular',
    'app',
    'ngResource',
    'core/core.module',
    'account/account.module',
    'home/home.module',
    'admin/admin.module',
    'test/test.module'
  ],

// Bootstrap
  function (angular) {
    'use strict';
    angular.element(document).ready(function () {
      angular.bootstrap(document, ['app']);
    });
  });