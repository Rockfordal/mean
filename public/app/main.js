require.config({
  baseUrl: '/app',

  paths: {
    angular: '../vendor/angular/angular',
    bootstrap: '../vendor/bootstrap/dist/js/bootstrap.min',
    uiRouter: '../vendor/angular-ui-router/release/angular-ui-router',
    ngResource: '../vendor/angular-resource/angular-resource',
    jquery : '../vendor/jquery/dist/jquery.min',
    toastr: '../vendor/toastr/toastr.min',
    uiutils: '/vendor/ui-utils/ui-utils.min'
  },

  shim: {
    jquery: { exports: '$' },
    bootstrap: { deps: ['jquery'] },
    toastr: { exports: 'toastr' },
    angular: { deps: ['jquery'], exports: 'angular' },
    uiRouter: { deps: ['angular'] },
    uiutils: { deps: ['angular'] },
    ngResource: { deps: ['angular']}
  },

  priority: [
    'uiRouter',
    'angular',
    'app',
    'ngResource',
    'account/index'
  ]
});

// Kräv
require([
    'angular',
    'app',
    'ngResource',
    'core/core.module',
    'account/account.module',
    'home/home.module',
    'admin/admin.module'
  ],

// Bootstrap
  function (angular) {
    angular.element(document).ready(function () {
      angular.bootstrap(document, ['app']);
    });
  });