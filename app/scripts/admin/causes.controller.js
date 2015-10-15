'use strict';

angular.module('dgAdminApp')
.controller('CauseListCtrl', function ($scope, $rootScope, $state, causes, Cause) {
  $scope.causes = causes;

  $rootScope.$on('causes:updated', function () {
    console.log('updating causes');
    $scope.causes = Cause.find();
  });

  $scope.formActive = function () {
    return $state.includes('admin.causes.new') || $state.includes('admin.causes.edit');
  };
})

.controller('CauseFormCtrl', function ($scope, $rootScope, cause, Cause, $state) {
  $scope.cause = cause;

  $scope.causeFields = [{
    key: 'name',
    type: 'input',
    templateOptions: {
      label: 'Title',
      placeholder: 'Title',
      required: true
    }
  },{
    key: 'featuredImage',
    type: 'input',
    templateOptions: {
      label: 'Featured Image',
      placeholder: 'Paste URL here',
      required: true
    }
  },{
    key: 'position.lat',
    type: 'input',
    templateOptions: {
      label: 'Latitude',
      placeholder: '48.502778'
    }
  },{
    key: 'position.lng',
    type: 'input',
    templateOptions: {
      label: 'Longitude',
      placeholder: '48.502778'
    }
  },{
    key: 'aspiration',
    type: 'input',
    templateOptions: {
      label: 'Aspiration'
    }
  },{
    key: 'indexText',
    type: 'textarea',
    templateOptions: {
      label: 'Index Text',
      required: true
    }
  },{
    key: 'totalGoal',
    type: 'input',
    template: {
      label: 'Total Goal',
      description: 'Optional unless an impact goal is not set.'
    }
  },{
    key: 'body',
    type: 'texteditor',
    templateOptions: {
      label: 'Content',
      required: true
    }
  }];

  $scope.deleteCause = function (cause) {
    if (window.confirm('Are you sure?')) {
      Cause.deleteById({ id: cause.id }).$promise.then(function () {
        $rootScope.$broadcast('causes:updated');
        $state.go('admin.causes');
      });
    }
  };

  $scope.onSubmit = function () {
    Cause.updateOrCreate($scope.cause).$promise.then(function () {
      $rootScope.$broadcast('causes:updated');
      $state.go('admin.causes');
    });
  };
});