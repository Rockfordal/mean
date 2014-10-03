//define(['angular', 'lazy-partials'], function (angular) {
//  angular
//    .module('app.mvUser', ['app.lazy.partials'])
//    .factory('mvUser', mvUser);
//
//  function mvUser($resource) {
//    var UserResource = $resource('/api/users/:id', {_id: "@id"}, {
//      update: { method: 'PUT', isArray: false }
//    });
//
//    UserResource.prototype.isAdmin = function () {
//      return this.roles && this.roles.indexOf('admin') > -1;
//    };
//
//    return UserResource;
//  }
//
//});