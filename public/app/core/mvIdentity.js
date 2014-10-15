define(['angular'], function (angular) {

  function mvIdentity($window, mvUser, localStorageService) {

    var service = {
      currentUser:     getCurrentUser(),
      isAuthenticated: isAuthenticated,
      isAuthorized:    isAuthorized,
      clearUser:       clearUser
    };

    function clearUser (){
      this.currentUser = undefined;
      localStorageService.remove('user');
      localStorageService.remove('token');
    }

    function isAuthenticated() {
      return !!this.currentUser;
    }

    function isAuthorized(role) {
      return !!this.currentUser && this.currentUser.roles.indexOf(role) > -1;
    }

    function getCurrentUser() {
      var cu;
      var user  = localStorageService.get('user');

      if (!!user) {
        cu = new mvUser();
        angular.extend(cu, user);
      }
      return cu;
    }

    return service;
  }

  return mvIdentity;
});
