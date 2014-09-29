function mvProfileCtrl(mvAuth, mvIdentity, mvNotify) {
  $scope.email = mvIdentity.currentUser.username;
  $scope.fname = mvIdentity.currentUser.firstName;
  $scope.fname = mvIdentity.currentUser.lastName;

}