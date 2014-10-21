define([], function () {

  function mvTodoCtrl(mvTodo, $filter, mvNotifier) {
    var vm = this;

    vm.flasha = function() {
      console.log('flashar');
      mvNotifier.notify('testar');
    };

  }

  return mvTodoCtrl;
});
