define(['angular', 'lazy-partials'], function(angular) {

  function mvUser($resource) {
    var UserResource = $resource('/api/users/:id', {_id: "@id"}, {
      update: { method: 'PUT', isArray: false }
    });

    //noinspection JSUnusedGlobalSymbols
    UserResource.prototype.isAdmin = function () {
      return this.roles && this.roles.indexOf('admin') > -1;
    };

    return UserResource;
  }

  function mvUserlistCtrl($scope, mvUser) {
    console.log('hallå!');
    $scope.users = mvUser.query();
  }

  angular
    .module('app', ['app.lazy.partials'])
    .factory('mvUser', mvUser);
  angular
    .module('app', ['app.lazy.partials'])
    .controller('mvUserlistCtrl', mvUserlistCtrl);

});