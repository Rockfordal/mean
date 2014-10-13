define([], function () {

  function mvTestCtrl() {
    var vm = this;

    vm.test = 'testar';

    vm.people = [
      {id: 1, name: 'nils'},
      {id: 2, name: 'igor'}
    ];
  }

  return mvTestCtrl;
});
