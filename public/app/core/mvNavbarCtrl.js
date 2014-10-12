define([], function () {

  function mvNavbarCtrl($location, $rootScope, $state) {
    var vm = this;
    vm.location = $location.url();
    vm.items = [];
//    vm.data = $state.current.data;

    vm.ordering = function (item) {
      return item.values;
    };

    $state.get().forEach(function (state) {
      if (!!state.label) {
        vm.items.push({ name: state.name, text: state.label, url: state.url });
      }
    });

    $rootScope.$on('$stateChangeSuccess', function(){
      vm.location = $location.url();
    });
  }

  return mvNavbarCtrl;
});