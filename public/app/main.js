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
    angular: { deps: ['jquery'], exports: 'angular' },
    jquery: { exports: '$' },
    uiRouter: { deps: ['angular'] },
    bootstrap: { deps: ['jquery'] },
    uiutils: { deps: ['angular'] },
    ngResource: { deps: ['angular']}
  },

  priority: ['uiRouter', 'angular', 'app', 'ngResource', 'account/index']
});

// Kräv
require([
    'angular',
    'app',
    'ngResource',
    'common/common',
    'account/account',
    'home/home'
  ],

// Bootstrappa
  function (angular) {
    angular.element(document).ready(function () {
      angular.bootstrap(document, ['app']);
    });
  });