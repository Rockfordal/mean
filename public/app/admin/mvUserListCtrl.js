define([], function () {

  function mvUserListCtrl(mvUser) {
    var vm = this;
    vm.users = mvUser.query();
  }

  return mvUserListCtrl;
});
