'use strict';

angular.module('dgAuth')
.controller('LoginCtrl', function ($scope, AuthService, $state, localStorageService, Seed) {
  $scope.user = {};
  $scope.loginError = {};

  /*if (AuthService.isAuthenticated()) {
    $state.go('admin.dashboard');
  }*/

  $scope.login = function () {
    AuthService.login($scope.user).then(function () {
      $state.go('admin.dashboard');
    }, function (err) {
      console.log(err);
      $scope.loginError = err.data;
    });
  };

  $scope.seedIt = function () {
    Seed.it();
  };
});