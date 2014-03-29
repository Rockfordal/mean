function mvNavBarLoginCtrl($scope, mvIdentity, mvNotifier, mvAuth) {
  $scope.identity = mvIdentity;
  $scope.signin = function(username, password) {
    mvAuth.authenticateUser(username, password).then(function(success) {
      if (success) {
        mvNotifier.notify('Du har loggats in!');
      } else {
        mvNotifier.notify('Felaktigt användarnamn eller lösenord');
      }
    });
  }
}
