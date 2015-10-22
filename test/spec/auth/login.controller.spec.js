'use strict';

describe('Controller: LoginCtrl', function () {

  // load the controller's module
  beforeEach(module('dgAuth'));

  var LoginCtrl,
      scope,
      store = {};

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, AuthService, $state) {
    scope = $rootScope.$new();

    spyOn(AuthService, 'isAuthenticated').and.callFake(function () {
      return true;
    });

    spyOn($state, 'go').and.stub();

    

    LoginCtrl = $controller('LoginCtrl', {
      $scope: scope,

      // mock localStorageService
      localStorageService: {
        get: function (key) {
          return store[key];
        },
        set: function (key, value) {
          store[key] = value;
          return value;
        }
      }
    });
  }));

  it('should clear fields by default', function () {
    expect(scope.user).toEqual({});
  });

  it('should forward to the dashboard if the user is authenticated', inject(function (AuthService, $state) {
    expect(AuthService.isAuthenticated).toHaveBeenCalled();
    expect($state.go).toHaveBeenCalledWith('admin.dashboard');
  }));

  it('should call AuthService#login on login', inject(function (AuthService, $q, $state) {
    var df = $q.defer();
    spyOn(AuthService, 'login').and.returnValue(df.promise);

    scope.user = {
      email: 'test@test.com',
      password: 'test'
    };

    scope.login();

    expect(AuthService.login).toHaveBeenCalledWith(scope.user);

    df.resolve();
    scope.$apply();

    expect($state.go).toHaveBeenCalledWith('admin.dashboard');
  }));

  it('should display an error if AuthService throws an error', inject(function (AuthService, $q) {
    var df = $q.defer();
    var error = {
      data: {
        code: 'LOGIN_FAILED',
        message: 'login failed',
        name: 'Error',
        status: 401,
        statusCode: 401
      },
      status: 401,
      statusText: 'Unauthorized'
    };

    spyOn(AuthService, 'login').and.returnValue(df.promise);

    scope.user = {
      email: 'test@test.com',
      password: 'test'
    };

    scope.login();

    expect(AuthService.login).toHaveBeenCalledWith(scope.user);

    df.reject(error);

    scope.$apply();

    expect(scope.loginError).toBe(error.data);
  }));

  it('should call seed service on seed', inject(function (Seed) {
    spyOn(Seed, 'it').and.stub();

    scope.seedIt();

    expect(Seed.it).toHaveBeenCalled();
  }));
  
});
