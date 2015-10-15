'use strict';

angular.module('dgAuth')
.controller('LoginCtrl', function ($scope, AuthService, $state, localStorageService, Seed) {
  $scope.user = {};

  if (localStorageService.get('currentUser')) {
    $state.go('admin.dashboard');
  }

  $scope.login = function () {
    AuthService.login($scope.user).then(function () {
      $state.go('admin.dashboard');
    }, function (err) {
      console.log(err);
    });
  };

  $scope.seedIt = function () {
    Seed.it();
  };
});