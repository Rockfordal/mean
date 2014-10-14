define([], function () {

  function mvTodo($resource) {
    var TodoResource = $resource('/api/todos/:id', {_id: '@id'}, {
      update: { method: 'PUT', isArray: false }
    });

//    UserResource.prototype.isAdmin = function () {
//      return this.roles && this.roles.indexOf('admin') > -1;
//    };

    return TodoResource;
  }

  return mvTodo;
});