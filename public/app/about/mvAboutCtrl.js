define(['angular'], function(angular) {
  angular
    .module('app')
    .controller('mvAboutCtrl', mvAboutCtrl);

  function mvAboutCtrl($scope) {
    $scope.data = '1 2 3 4 5';
  }

});

//angular.module('app').controller('mvAboutCtrl', function mvAboutCtrl($scope) {
//  $scope.data = '1 2 3 4 5';
//});
