define(['common/common'], function () {

  function svc($window, mvUser) {
    var currentUser;

    if (!!$window.mvdata.bootstrappedUser) {
      console.log('mvidentity skapar ny user');
      currentUser = new mvUser();
      angular.extend(currentUser, $window.mvdata.bootstrappedUser);
    } else {
      console.log('har inte hittat bootstrappeduser: ' + $window.mvdata.bootstrappedUser);
    }

    return {
      currentUser:     currentUser,
      isAuthenticated: function () {
        return !!this.currentUser;
      },
      isAuthorized:    function (role) {
        return !!this.currentUser && this.currentUser.roles.indexOf(role) > -1;
      }
    }
  }
  return svc
});
