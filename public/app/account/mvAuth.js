define(['account/account.module'], function () {

  function svc($http, mvIdentity, $q, mvUser) {

    var service = {
      authenticateUser: authenticateUser,
      createUser: createUser,
      updateCurrentUser: updateCurrentUser,
      logoutUser: logoutUser,
      authorizeCurrentUserForRoute: authorizeCurrentUserForRoute,
      authorizeAuthenticatedUserForRoute: authorizeAuthenticatedUserForRoute
    };

      function authenticateUser (username, password) {
        var dfd = $q.defer();
        $http.post('/login/', { username: username, password: password }).then(function (response) {
          if (response.data.success) {
            var user = new mvUser();
            angular.extend(user, response.data.user);
            mvIdentity.currentUser = user;
            dfd.resolve(true);
          } else {
            dfd.resolve(false);
          }
        });
        return dfd.promise;
      }

      function createUser (newUserData) {
        var newUser = new mvUser(newUserData);
        var dfd = $q.defer();

        newUser.$save().then(function () {
          mvIdentity.currentUser = newUser;
          dfd.resolve();
        }, function (response) {
          dfd.reject(response.data.reason);
        });

        return dfd.promise;
      }

      function updateCurrentUser(newUserData) {
        var dfd = $q.defer();
        var clone = angular.copy(mvIdentity.currentUser);
        angular.extend(clone, newUserData);
        clone.$update().then(function () {
          mvIdentity.currentUser = clone;
          dfd.resolve();
        }, function (response) {
          dfd.reject(response.data.reason);
        });
        return dfd.promise;
      }

      function logoutUser() {
        var dfd = $q.defer();
        $http.post('/logout', {logout: true}).then(function () {
          mvIdentity.currentUser = undefined;
          dfd.resolve();
        });
        return dfd.promise;
      }

      function authorizeCurrentUserForRoute(role) {
        if (mvIdentity.isAuthorized('admin')) {
          return true;
        } else {
          return $q.reject('not authorized');
        }
      }

      function authorizeAuthenticatedUserForRoute() {
        if (mvIdentity.isAuthenticated()) {
          return true;
        } else {
          return $q.reject('not authorized');
        }
      }

     return service;
  }

  return svc;
});
