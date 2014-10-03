'use strint';

require.config({
  baseUrl: '/app',
  urlArgs: 'v=1.0',
  paths: {
    angular: '../vendor/angular/angular',
    uiRouter: '../vendor/angular-ui-router/release/angular-ui-router.min',
    uiRouterExtras: '../vendor/ui-router-extras/release/ct-ui-router-extras.min',
    uiRouterExtrasStatevis: '../statevis',
    ocLazyLoad: '../vendor/oclazyload/dist/ocLazyLoad.min',
    'ocLazyLoad-uiRouterDecorator': '../ocLazyLoad-uiRouterDecorator',
    'lazy-partials': 'common/lazy-partials',
    angularResource: '../vendor/angular-resource/angular-resource',
    angularSanitize: '../vendor/angular-sanitize/angular-sanitize.min',
    mvUser: '/app/account/mvUser'
  },

  shim: {
    angular: { exports: 'angular' },
    angularResource: { deps: ['angular'] },
    angularSanitize: { deps: ['angular'] },
    uiRouter: { deps: ['angular'] },
    ocLazyLoad: { deps: ['angular'] },
    uiRouterExtras: { deps: ['uiRouter'] }
  }
//  angular: { deps: ['jquery'], exports: 'angular' },
//  jquery: { exports: '$' },
//  d3: {deps: []},
//  lodash: { exports: '_' },
//  uiRouterExtrasStatevis: {deps: ['uiRouterExtras']}

//    angular: { exports: 'angular' },
//    ngRoute: ['angular'],
//    app:     ['angular']

});
//priority: ['angular', 'uiRouter', 'ocLAzyLoad']

/*
  toastr: '/vendor/toastr/toastr.min'
  angular-resource: '/vendor/angular-resource/angular-resource.min'
  ui-utils: '/vendor/ui-utils/ui-utils.min'
  mvNotifier: '/app/common/mvNotifier'
  mvIdentity: '/app/common/mvIdentity'
  mvAuth: '/app/account/nmvAuth'
  mvProfileCtrl: '/app/account/mvProfileCtrl'
  mvNavBarCtrl: '/app/account/mvNavBarLoginCtrl'
  mvSignupCtrl: '/app/account/mvSignupCtrl'
  mvUserListCtrl: '/app/user/mvUserListCtrl'
*/

require(['angular', 'app'],
  function () {
  'use strict';
  angular.bootstrap(document, ['app']);

  // The following is required if you want AngularJS Scenario tests to work
//  $('html').addClass('ng-app: app');
});