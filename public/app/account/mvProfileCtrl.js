define([], function () {

  function mvProfileCtrl(mvAuth, mvIdentity, mvNotifier) {
    var vm = this;
    vm.currentuser = mvIdentity.currentUser;
    vm.email = mvIdentity.currentUser.username;
    vm.fname = mvIdentity.currentUser.firstName;
    vm.lname = mvIdentity.currentUser.lastName;

    vm.update = function () {
      var newUserData = {
        username:  vm.email,
        firstName: vm.fname,
        lastName:  vm.lname
      };

      if (vm.password && vm.password.length > 0) {
        newUserData.password = vm.password;
      }

      mvAuth.updateCurrentUser(newUserData).then(function () {
        mvNotifier.notify('Your user account has been updated');
      }, function (reason) {
        mvNotifier.error(reason);
      });
    };
  }

  return mvProfileCtrl;
});
