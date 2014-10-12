define([
  'app',
  'test/mvTestCtrl'

], function (app, mvTestCtrl) {

  app
    .controller('mvTestCtrl', mvTestCtrl)
    .config(function ($stateProvider) {
      $stateProvider
        .state('test', {
          url:         '/test',
          templateUrl: '/app/test/test.html',
          controller:  'mvTestCtrl',
          label: 'Test'
        });
    });
//    .run(routeConfig);

//  function routeConfig(mvRoutehelper) {
//    console.log('test.module routeconfig');
//    mvRoutehelper.configureRoutes(getRoutes());
//  }

//  function getRoutes() {
//    return [{
//        name: 'Test',
//        config: {
//          url: '/',
//          templateUrl: '/app/test/test.html',
//          controller:  'mvtestCtrl',
//          controllerAs: 'vm'
//        }
//      }];
//  }

  return app;
});
