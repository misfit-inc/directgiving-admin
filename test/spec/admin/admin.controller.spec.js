'use strict';

describe('Controller: AdminCtrl', function () {

  // load the controller's module
  beforeEach(module('dgAdminApp'));

  var AdminCtrl,
      scope,
      store = {},
      currentState;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();

    scope.menu = [{
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

    AdminCtrl = $controller('AdminCtrl', {
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

  it('should define a menu', function () {
    expect(scope.menu.length).toBeGreaterThan(0);
  });

  it('should have a formActive function', function () {
    expect(scope.formActive).toBeDefined();
    expect(scope.formActive instanceof Function).toBe(true);
  });

  it('should have an isActive function', function () {
    expect(scope.isActive).toBeDefined();
    expect(scope.isActive instanceof Function).toBe(true);
  });

  it('should have a logout function', function () {
    expect(scope.logout).toBeDefined();
    expect(scope.logout instanceof Function).toBe(true);
  });

  describe('formActive function', function () {

    beforeEach(inject(function ($state) {
      spyOn($state, 'go').and.callFake(function (state) {
        currentState = state;
      });

      spyOn($state, 'includes').and.callFake(function (substring) {
        return currentState.indexOf(substring) > -1;
      });
    }));

    it('should return true when editing or creating a model', inject(function ($state) {
      $state.go('admin.causes.edit');
      expect(scope.formActive()).toBe(true);
    }));

    it('should return false when viewing a list', inject(function ($state) {
      $state.go('admin.causes');
      expect(scope.formActive()).toBe(false);
    }));
  });

  describe('isActive function', function () {

    beforeEach(inject(function ($state) {
      spyOn($state, 'go').and.callFake(function (state) {
        currentState = state;
      });

      spyOn($state, 'includes').and.callFake(function (substring) {
        return currentState.indexOf(substring) > -1;
      });
    }));

    it('should return true when called with the active state', inject(function ($state) {
      $state.go(scope.menu[2].state);
      expect(scope.isActive(scope.menu[2])).toBe(true);
    }));

    it('should return false when called with a different state', inject(function ($state) {
      $state.go(scope.menu[0].state);
      expect(scope.isActive(scope.menu[1])).toBe(false);
    }));

    it('should return true for child states as well', inject(function ($state) {
      $state.go(scope.menu[2].state + '.edit');
      expect(scope.isActive(scope.menu[2])).toBe(true);
    }));
  });

  describe('logout function', function () {

    beforeEach(inject(function ($httpBackend) {
      $httpBackend.expectGET('views/login.html').respond(201, '');
    }));

    it('should call AuthService and forward to login page on success', inject(function ($state, AuthService, $httpBackend, $q) {
      var df = $q.defer();
      spyOn($state, 'go').and.stub();
      spyOn(AuthService, 'logout').and.returnValue(df.promise);

      scope.logout();

      expect(AuthService.logout).toHaveBeenCalled();

      df.resolve();
      scope.$apply();

      expect($state.go).toHaveBeenCalledWith('login');
    }));

    it('should still logout on error, deleting local storage version of user', inject(function ($state, AuthService, $httpBackend, localStorageService, $q) {
      var df = $q.defer(),
          error = {
            data: {
              code: 'INTERNAL_SERVER_ERROR',
              message: 'internal server error',
              name: 'Error',
              status: 500,
              statusCode: 500
            },
            status: 500,
            statusText: 'Internal Server Error'
          };
      spyOn($state, 'go').and.stub();
      spyOn(AuthService, 'logout').and.returnValue(df.promise);
      spyOn(localStorageService, 'set').and.stub();

      scope.logout();
      expect(AuthService.logout).toHaveBeenCalled();
      df.reject(error);
      scope.$apply();
      expect($state.go).toHaveBeenCalledWith('login');
    }));
  });
  
});
