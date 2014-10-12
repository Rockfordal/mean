define([], function () {

  function mvNavbarCtrl($location, $rootScope, $state) {
    var vm = this;
    vm.location = $location.url();
    vm.ordering = function (item) {
      return item.values;
    };

    vm.items = [
      { name: 'home',  text: 'Hem', url: '/' },
      { name: 'test',  text: 'Om',  url: '/test' }
    ];

    vm.data = $state.current.data;
    $state.get().forEach(function (state) {
      //console.log(state.name);
    });

    $rootScope.$on('$stateChangeSuccess', function(){
      vm.location = $location.url();
    });
  }

  return mvNavbarCtrl;
});