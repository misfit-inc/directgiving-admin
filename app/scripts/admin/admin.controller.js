'use strict';

angular.module('dgAdminApp')
.controller('AdminCtrl', function ($scope, $state, $rootScope, localStorageService, AuthService) {
  if (!localStorageService.get('currentUser')) {
    $state.go('login');
  } else {
    $rootScope.currentUser = localStorageService.get('currentUser');
  }

  $scope.menu = [{
    label: 'Dashboard',
    state: 'admin.dashboard'
  },{
    label: 'Organization',
    state: 'admin.organization'
  },{
    label: 'Causes',
    state: 'admin.causes'
  },{
    label: 'Entries',
    state: 'admin.entries'
  }];

  $scope.formActive = function () {
    return $state.includes('new') || $state.includes('edit');
  };

  $scope.isActive = function (item) {
    return $state.includes(item.state);
  };

  /*$scope.toggleSidenav = function (name) {
    $mdSidenav(name).toggle();
  };*/

  $scope.logout = function () {
    AuthService.logout().then(function () {
      $state.go('login');
    });
  };
});