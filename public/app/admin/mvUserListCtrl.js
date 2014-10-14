define([], function () {

 function mvUserListCtrl(mvUser, $filter, $modal) {
   var vm = this;
   vm.currentPage = 1;
   vm.itemsPerPage = 5;
   vm.maxPagesToShow = 6;
   getUsers();

   function getUsers() {
     mvUser.query(function(users){
       vm.totalItems = users.length;
       vm.users = users;
       vm.pageChanged();
     });
   }

   vm.setPage = function (pageNo) {
     vm.currentPage = pageNo;
   };

   vm.pageChanged = function () {
     var begin = ((vm.currentPage - 1) * vm.itemsPerPage);
     var end = begin + vm.itemsPerPage;
     var users = $filter('filter')(vm.users, vm.searchText);
     vm.filtusers = users.slice(begin, end);
   };

   vm.pageCount = function () {
     return Math.ceil(vm.users.length / vm.itemsPerPage);
   };

   vm.create = function () {
     $modal.open({
       templateUrl: '/app/admin/newuser.html',
//       controller:  'ModalInstanceCtrl',
       size:        5
//       resolve:     {
//         items: function () {
//           return $scope.items;
//         }
//       }
     });
   };

 }

  return mvUserListCtrl;
});
