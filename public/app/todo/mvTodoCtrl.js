define([], function () {

  function mvTodoCtrl(mvTodo, $filter) {
    var vm = this;
    vm.currentPage = 1;
    vm.itemsPerPage = 5;
    vm.maxPagesToShow = 6;
    getTodos();

    function getTodos() {
      mvTodo.query(function (todos) {
        vm.totalItems = todos.length;
        vm.todos = todos;
        vm.pageChanged();
      });
    }

    vm.setPage = function (pageNo) {
      vm.currentPage = pageNo;
    };

    vm.pageChanged = function () {
      var begin = ((vm.currentPage - 1) * vm.itemsPerPage);
      var end = begin + vm.itemsPerPage;
      var todos = $filter('filter')(vm.todos, vm.searchText);
      vm.filttodos = todos.slice(begin, end);
    };

    vm.pageCount = function () {
      return Math.ceil(vm.todos.length / vm.itemsPerPage);
    };
  }

  return mvTodoCtrl;
});
