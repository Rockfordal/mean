function mvUserListCtrl($scope, mvUser) {
  $scope.users = mvUser.query();
}