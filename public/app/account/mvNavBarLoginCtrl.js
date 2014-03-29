function mvNavBarLoginCtrl($scope, mvIdentity, mvNotifier, mvAuth, $location) {
  $scope.identity = mvIdentity;
  $scope.signin = function(username, password) {
    mvAuth.authenticateUser(username, password).then(function(success) {
      if (success) {
        mvNotifier.notify('Du har loggats in!');
      } else {
        mvNotifier.notify('Felaktigt användarnamn eller lösenord');
      }
    });
  $scope.signout = function() {
    mvAuth.logoutUser().then(function () {
      $scope.username = "";
      $scope.password = "";
      mvNotifier.notify('Du har loggat ut!');
      $location.path('/');
    })
  }
}}

