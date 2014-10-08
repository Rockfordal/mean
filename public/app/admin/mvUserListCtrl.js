define([], function () {

  function mvUserListCtrl($scope, mvUser) {
    $scope.users = mvUser.query();
  }

  return mvUserListCtrl;
});
