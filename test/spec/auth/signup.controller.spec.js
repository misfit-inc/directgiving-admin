'use strict';

describe('Controller: SignUpCtrl', function () {

  // load the controller's module
  beforeEach(module('dgAuth'));

  var SignUpCtrl,
    scope;

  var mockOrg = {
    name: 'Unicef',
    description: 'The biggest kid on the playground',
    location: {
      lat: -15.222,
      lng: 12.6678
    },
    admin: {
      name: 'Charles Testeroni',
      email: 'charles@unicef.com',
      password: 'hi',
      password2: 'hi'
    }
  };

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SignUpCtrl = $controller('SignUpCtrl', {
      $scope: scope
    });
  }));

  it('should initialize with an empty organization', function () {
    expect(scope.organization).toEqual({ admin: {} });
  });

  it('should initialize organizationFields', function () {
    expect(scope.organizationFields.length).toBeGreaterThan(0);
  });

  it('should have a submitForm function', function () {
    expect(scope.submitForm instanceof Function).toBe(true);
  });

  it('should create an organization and admin when submitted, and log user in', inject(function (Organization, Admin, AuthService, $q, $state) {
    var df = $q.defer(),
        df2 = $q.defer(),
        df3 = $q.defer();
    scope.organization = mockOrg;
    spyOn(Organization, 'create').and.returnValue({
      $promise: df.promise
    });

    spyOn(Admin, 'create').and.returnValue({
      $promise: df2.promise
    });

    spyOn(AuthService, 'login').and.returnValue(df3.promise);

    spyOn($state, 'go').and.stub();

    scope.submitForm();
    expect(Organization.create).toHaveBeenCalled();

    // mock organization ID returned from server
    df.resolve({ id: 5 });

    scope.$digest();

    expect(Admin.create).toHaveBeenCalled();

    df2.resolve();

    scope.$digest();

    expect(AuthService.login).toHaveBeenCalledWith({ 
      email: scope.organization.admin.email, 
      password: scope.organization.admin.password 
    });

    df3.resolve();

    scope.$digest();

    expect($state.go).toHaveBeenCalledWith('admin.dashboard');
  }));
});
