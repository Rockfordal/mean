define(['module'], function (appleModule) {
  'use strict';

  appleModule
    .controller('Apple.BaseCtrl', AppleBaseCtrl);

  function AppleBaseCtrl($scope) {
    console.log('appleCtrl loaded');
    $scope.message = 'I am the apple controller';
  }

});