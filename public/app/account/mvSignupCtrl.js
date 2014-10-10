define([], function () {

  function mvSignupCtrl(mvNotifier, $location, mvAuth) {
    vm = this;
    vm.signup = function () {
      var newUserData = {
        username:  vm.email,
        password:  vm.password,
        firstName: vm.fname,
        lastName:  vm.lname
      };

      mvAuth.createUser(newUserData).then(function () {
        mvNotifier.notify('Användaren skapad');
        $location.path('/');
      }, function (reason) {
        mvNotifier.error(reason);
      })
    }
  }

  return mvSignupCtrl;
});
