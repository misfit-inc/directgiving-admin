'use strict';

angular.module('dgAdminApp')
.controller('EntryListCtrl', function ($scope, $rootScope, $state, Entry, Cause, entries) {
  $scope.entries = entries;
  $scope.loading = false;

  $rootScope.$on('entries:updated', function () {
    $scope.loading = true;
    $scope.entries = Entry.find({}).$promise.then(function () {
      $scope.loading = false;
    });
  });

  $scope.formActive = function () {
    return $state.includes('admin.entries.new') || $state.includes('admin.entries.edit');
  };
})

.controller('EntryFormCtrl', function ($scope, $rootScope, $state, Entry, entry, Cause) {
  $scope.entry = entry;

  $scope.entryFields = [{
    key: 'causeId',
    type: 'select',
    templateOptions: {
      label: 'Cause',
      options: Cause.find({ filter: { where: { organizationId: $rootScope.currentUser.organizationId }}}),
      labelProp: 'name',
      valueProp: 'id'
    }
  },{
    key: 'title',
    type: 'input',
    templateOptions: {
      label: 'Title',
      placeholder: 'Title',
      required: true
    }
  },{
    key: 'body',
    type: 'texteditor',
    templateOptions: {
      label: 'Content',
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
  },{
    key: 'individual',
    type: 'checkbox',
    templateOptions: {
      label: 'Individual post',
    }
  },{
    key: 'public',
    type: 'checkbox',
    templateOptions: {
      label: 'Show publically'
    }
  }];

  $scope.onSubmit = function () {
    Entry.updateOrCreate($scope.entry).$promise.then(function () {
      $rootScope.$broadcast('entries:updated');
      $state.go('admin.entries');
    });
  };
});