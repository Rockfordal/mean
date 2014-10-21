define([], function () {

 function mvUserListCtrl(mvUser, mvFilter, $modal, mvNotifier) {
   var vm = this;
   vm.users = mvUser.$collection();
   var allUsers;
   vm.currentPage = 1;
   vm.maxPageToShow = 5;
   vm.itemsPerPage = 10;
   getUsers();

   function getUsers() {
     vm.users.$fetch();
     vm.users.$asPromise().then(function (data) {
       allUsers = data;
       vm.pageChanged();
     });
   }

   vm.pageChanged = function () {
     var searchdata = mvFilter.sok(allUsers, vm.searchText);
     vm.totalItems = searchdata.length;
     vm.loggswipes = mvFilter.paginera(searchdata, vm.currentPage, vm.itemsPerPage);
   };

   vm.setPage = function (pageNum) {
     vm.currentPage = pageNum;
   };

   vm.remove = function (index) {

     var u = vm.users.splice(index, 1);
     var user = vm.users.$find(u[0]._id);

       user.$destroy().$asPromise().then(function(){
         var fullname = u[0].firstName + ' ' + u[0].lastName;
         mvNotifier.notify('Deleted user ' + fullname);
       });
   };

   vm.create = function () {
     $modal.open({
       templateUrl: '/app/account/signupmodal.html',
       controller:  'mvSignupCtrl',
       controllerAs: 'signup',
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
