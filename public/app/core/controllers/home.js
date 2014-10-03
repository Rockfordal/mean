define(['core/module'], function(coreModule) {
  'use strict';

  coreModule
    .controller('HomeCtrl', homeCtrl);

  function homeCtrl($scope, $state) {

    $scope.courses = [
      { name: 'C#', featured: true, published: new Date('2014-01-01') },
      { name: 'Ruby', featured: true, published: new Date('2014-02-01') },
      { name: 'Python', featured: true, published: new Date('2014-03-01') }
    ];

    $scope.gotoState = function(state) {
      $state.go(state);
    };
  };

});