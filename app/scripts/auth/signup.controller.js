'use strict';

angular.module('dgAuth')
.controller('SignUpCtrl', function ($scope, AuthService, $state, localStorageService, Organization, Admin) {
  $scope.organization = {
    admin: {}
  };

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
    type: 'textarea',
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
  },{
    noFormControl: true,
    template: '<p>Create an admin user for your organization.</p>'
  },{
    key: 'admin.name',
    type: 'input',
    templateOptions: {
      label: 'Admin Name',
    }
  },{
    key: 'admin.email',
    type: 'input',
    templateOptions: {
      label: 'Admin Email',
      required: true
    }
  },{
    key: 'admin.password',
    type: 'input',
    templateOptions: {
      label: 'Admin Password',
      required: true
    },
    ngModelElAttrs: {
      'type': 'password'
    }
  },{
    key: 'admin.password2',
    type: 'input',
    templateOptions: {
      label: 'Confirm admin password',
      required: true
    },
    ngModelElAttrs: {
      'type': 'password'
    },
    validators: {
      matchesPassword: function (viewValue, modelValue) {
        var value = viewValue || modelValue;
        console.log(value);
        console.log($scope.organization.admin.password);
        return value === $scope.organization.admin.password;
      }
    }
  }];

  var createOrganization = function (organization) {
    var newOrg = {
      name: organization.name,
      description: organization.description,
      location: organization.location
    };

    return Organization.create(newOrg).$promise;
  };

  var createAdminForOrganization = function (organization) {
    var newAdmin = {
      name: $scope.organization.admin.name,
      email: $scope.organization.admin.email,
      password: $scope.organization.admin.password,
      organizationId: organization.id
    };

    return Admin.create(newAdmin).$promise;
  };

  $scope.submitForm = function () {
    createOrganization($scope.organization).then(function (organization) {
      createAdminForOrganization(organization).then(function () {
        AuthService.login({ email: $scope.organization.admin.email, password: $scope.organization.admin.password }).then(function () {
          $state.go('admin.dashboard');
        });
      });
    });
  };
});