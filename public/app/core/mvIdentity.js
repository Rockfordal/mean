define([], function () {

  function mvIdentity($window, mvUser) {

    var service = {
      currentUser:     currentUser(),
      isAuthenticated: isAuthenticated,
      isAuthorized:    isAuthorized
    };

    function isAuthenticated() {
      return !!this.currentUser;
    }

    function isAuthorized(role) {
      return !!this.currentUser && this.currentUser.roles.indexOf(role) > -1;
    }

    function currentUser() {
      var cu;
      if (!!$window.mvdata.bootstrappedUser) {
        cu = new mvUser();
        angular.extend(cu, $window.mvdata.bootstrappedUser);
      }
      return cu;
    }

    return service;
  }

  return mvIdentity;
});