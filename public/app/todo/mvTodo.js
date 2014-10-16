define([], function () {

  function mvTodo(restmod) {
    return restmod.model('/api/todos');
  }

  return mvTodo;
});
