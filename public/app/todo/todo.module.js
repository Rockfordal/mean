define([
  'app',
  'todo/mvTodo',
  'todo/mvTodoCtrl'

], function (app, mvTodo, mvTodoCtrl) {

  app
    .factory('mvTodo', mvTodo)
    .controller('mvTodoCtrl', mvTodoCtrl)
    .config(function ($stateProvider) {
      $stateProvider
        .state('todo', {
          url:         '/todo',
          templateUrl: '/app/todo/todo.html',
          controller:  'mvTodoCtrl',
          controllerAs:  'vm',
          label: 'Todo'
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
