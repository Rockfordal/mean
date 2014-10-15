define([], function () {

  function mvLoginCtrl(mvIdentity, mvNotifier, mvAuth, $location) {
    var vm = this;
    vm.identity = mvIdentity;

    vm.signin = function (username, password) {
      mvAuth.authenticateUser(username, password).then(function (success) {
        if (success) {
          mvNotifier.notify('Du har loggats in!');
        } else {
          mvNotifier.notify('Felaktigt användarnamn eller lösenord');
        }
      });
    };

    vm.signout = function () {
      mvAuth.logoutUser().then(function () {
        vm.username = '';
        vm.password = '';
        mvNotifier.notify('Du har loggat ut!');
        $location.path('/');
      });
    };
  }

  return mvLoginCtrl;
});
