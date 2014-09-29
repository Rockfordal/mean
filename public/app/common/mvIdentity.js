function mvIdentity($window, mvUser) {
  var currentUser;

  if (!!$window.mvdata.bootstrappedUser) {
    currentUser = new mvUser();
    angular.extend(currentUser, $window.mvdata.bootstrappedUser);
  }

  return {
    currentUser: currentUser,
    isAuthenticated: function () {
      return !!this.currentUser;
    },
    isAuthorized: function (role) {
      return !!this.currentUser && this.currentUser.roles.indexOf(role) > -1;
    }
  }
}