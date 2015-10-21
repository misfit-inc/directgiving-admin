'use strict';

angular.module('dgAdminApp')
.controller('CauseListCtrl', function ($scope, $rootScope, $state, causes, Cause, localStorageService) {
  $scope.causes = causes;
  $scope.loading = false;

  $rootScope.$on('causes:updated', function () {
    $scope.loading = true;
    console.log('updating causes');
    $scope.causes = Cause.find({ filter: { where: { organizationId: localStorageService.get('currentUser').organizationId }}}, function () {
      $scope.loading = false;
    });
  });

  $scope.formActive = function () {
    return $state.includes('admin.causes.new') || $state.includes('admin.causes.edit');
  };
})

.controller('CauseFormCtrl', function ($scope, $rootScope, cause, impactGoal, Cause, ImpactGoal, $state) {
  $scope.cause = cause;

  console.log(impactGoal);
  console.log($scope.cause);

  if (impactGoal && !$scope.cause.totalGoal) {
    $scope.impactGoal = impactGoal;
    $scope.cause.impactGoal = true;
    $scope.cause.goalAmount = impactGoal.amount;
  } else {
    $scope.impactGoal = {};
    $scope.cause.impactGoal = false;
    $scope.cause.goalAmount = $scope.cause.totalGoal || '';
  }

  console.log($scope.cause.goalAmount);

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
    key: 'body',
    type: 'texteditor',
    templateOptions: {
      label: 'Content',
      required: true
    }
  },{
    key: 'goalAmount',
    type: 'input',
    templateOptions: {
      label: 'Goal amount'
    }
  },{
    key: 'goalText',
    type: 'input',
    templateOptions: {
      label: 'Goal description',
      description: 'Appears near the donate button, underneath the goal amount.'
    }
  },{
    key: 'impactGoal',
    type: 'checkbox',
    templateOptions: {
      label: 'Impact Goal?',
      description: 'If checked, users get updates depending on how much they have donated.'
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
    var newImpactGoal = {};

    if ($scope.cause.impactGoal) {
      newImpactGoal.amount = $scope.cause.goalAmount;
      $scope.cause.totalGoal = 0;
    } else {
      $scope.cause.totalGoal = $scope.cause.goalAmount;
    }

    delete $scope.cause.impactGoal;
    delete $scope.cause.goalAmount;

    $scope.cause.organizationId = $rootScope.currentUser.organizationId;

    Cause.updateOrCreate($scope.cause).$promise.then(function (causeResponse) {
      
      if (newImpactGoal) {
        ImpactGoal.updateOrCreate({
          amount: newImpactGoal.amount,
          causeId: causeResponse.id
        }).$promise.then(function () {
          $rootScope.$broadcast('causes:updated');
          $state.go('admin.causes');
        });
      } else {
        $rootScope.$broadcast('causes:updated');
        $state.go('admin.causes');
      }
    });
  };
});