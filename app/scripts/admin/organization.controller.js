'use strict';

angular.module('dgAdminApp')

.controller('OrganizationCtrl', function ($scope, $rootScope, organization, Organization) {
  $scope.organization = organization;
  $scope.saved = false;
  $scope.saving = false;

  $scope.organizationFields = [{
    key: 'name',
    type: 'input',
    templateOptions: {
      label: 'Organization Name',
      placeholder: 'Organization Name',
      required: true
    }
  },{
    key: 'description',
    type: 'texteditor',
    templateOptions: {
      label: 'Description',
      required: true
    }
  },{
    key: 'location.lat',
    type: 'input',
    templateOptions: {
      label: 'Latitude',
      placeholder: '48.502778'
    }
  },{
    key: 'location.lng',
    type: 'input',
    templateOptions: {
      label: 'Longitude',
      placeholder: '48.502778'
    }
  }];

  $scope.$watch('organization', function (newData, oldData) {
    if (newData !== oldData) {
      $scope.saved = false;
    }
  }, true);

  $scope.save = function () {
    console.log('saving');
    $scope.saved = false;
    $scope.saving = true;
    Organization.upsert($scope.organization).$promise.then(function () {
      $scope.saved = true;
      $scope.saving = false;
    });
  };
});