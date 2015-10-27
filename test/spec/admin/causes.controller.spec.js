'use strict';

describe('Controller: CauseListCtrl', function () {
  beforeEach(module('dgAdminApp'));

  var CauseListCtrl,
      scope;

  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();

    CauseListCtrl = $controller('CauseListCtrl', {
      $scope: scope,
      causes: [{
        "name":"Village Wells",
        "featuredImage":"http://www.wvi.org/sites/default/files/styles/article_full/public/charity%20water%20photo%20Malawi.jpg",
        "position": {
          "lng":10.32424,
          "lat":5.84978
        },
        "totalGoal":0,
        "goalText":"Here's the goal",
        "aspiration":"End thirst",
        "body":"A bunch of <strong>HTML-formatted</strong> text can make up this body, which will eventually come from a <a href=\"https://en.wikipedia.org/wiki/WYSIWYG\">WYSIWYG</a> editor in the backend.",
        "indexText":"Villages need wells, because humans need water!",
        "id":1,
        "donorId":null,
        "createdAt":"2015-10-22T19:33:57.189Z",
        "updatedAt":"2015-10-22T19:33:57.190Z",
        "organizationId":1
      },{
        "name":"Food for Children",
        "featuredImage":"http://www.unicef.org.uk/Images/Media-medium-201x106/corporate-partners.jpg",
        "position": {
          "lng":10.32424,
          "lat":5.84978
        },
        "totalGoal":0,
        "goalText":"Here's the goal",
        "aspiration":"End hunger",
        "body":"A bunch of <strong>HTML-formatted</strong> text can make up this body, which will eventually come from a <a href=\"https://en.wikipedia.org/wiki/WYSIWYG\">WYSIWYG</a> editor in the backend.",
        "indexText":"This text will describe the cause on the index page",
        "id":2,
        "donorId":null,
        "createdAt":"2015-10-22T19:33:57.193Z",
        "updatedAt":"2015-10-22T19:33:57.194Z",
        "organizationId":1
      }]
    });
  }));

  it('should initialize a list of causes', function () {
    expect(scope.causes.length).toBe(2);
  });

  it('should pull a new list of causes on update', inject(function ($rootScope, Cause) {
    spyOn(Cause, 'find').and.stub();
    $rootScope.$broadcast('causes:updated');
    expect(Cause.find).toHaveBeenCalled();
    expect(scope.loading).toBe(true);
  }));
});

describe('Controller: CauseFormCtrl', function () {
  beforeEach(module('dgAdminApp'));

  var CauseFormCtrl,
      scope,
      existingCause,
      mockCause = {
        name: 'New Cause',
        featuredImage: 'http://test.com/image.png',
        position: {
          lat: '12.5',
          lng: '-55.167'
        },
        aspiration: 'Do a thing',
        indexText: 'Index text',
        body: 'Body of the cause',
        goalAmount: 1200,
        goalText: 'Text describing the goal',
        impactGoal: false
      };

  afterEach(function () {
    mockCause = {
      name: 'New Cause',
      featuredImage: 'http://test.com/image.png',
      position: {
        lat: '12.5',
        lng: '-55.167'
      },
      aspiration: 'Do a thing',
      indexText: 'Index text',
      body: 'Body of the cause',
      goalAmount: 1200,
      goalText: 'Text describing the goal',
      impactGoal: false
    };
  });

  describe('creating a new Cause', function () {
    beforeEach(inject(function ($controller, $rootScope) {
      scope = $rootScope.$new();

      CauseFormCtrl = $controller('CauseFormCtrl', {
        $scope: scope,
        cause: {},
        impactGoal: {}
      });

      $rootScope.currentUser = {
        email: 'test@test.com',
        organizationId: 1
      };
    }));

    it('should initialize an empty cause', function () {
      expect(scope.cause).toEqual({});
    });

    it('should initialize the fields of the form', function () {
      expect(scope.causeFields.length).toBeGreaterThan(0);
    });

    it('should create the cause on submit', inject(function (Cause, $q, $rootScope, $state, $httpBackend) {
      var df = $q.defer();

      $httpBackend.expectGET('views/login.html').respond(201, '');

      scope.cause = mockCause;

      spyOn(Cause, 'updateOrCreate').and.returnValue({
        $promise: df.promise
      });

      spyOn($state, 'go').and.stub();

      scope.onSubmit();

      expect(scope.cause.organizationId).toEqual($rootScope.currentUser.organizationId);

      expect(Cause.updateOrCreate).toHaveBeenCalledWith(scope.cause);

      df.resolve({
        name: 'New Cause',
        featuredImage: 'http://test.com/image.png',
        position: {
          lat: '12.5',
          lng: '-55.167'
        },
        aspiration: 'Do a thing',
        indexText: 'Index text',
        body: 'Body of the cause',
        totalGoal: 1200,
        goalText: 'Text describing the goal',
        id: 3 // id exists in the response from the server
      });

      scope.$apply();

      expect($state.go).toHaveBeenCalledWith('admin.causes');
    }));

    it('should create an impact goal if necessary', inject(function (Cause, $q, $rootScope, $state, $httpBackend, ImpactGoal) {
      var df = $q.defer(),
          df2 = $q.defer();

      $httpBackend.expectGET('views/login.html').respond(201, '');
      scope.cause = mockCause;

      var impactGoalAmount = mockCause.goalAmount;

      scope.cause.impactGoal = true;

      spyOn(Cause, 'updateOrCreate').and.returnValue({
        $promise: df.promise
      });
      spyOn(ImpactGoal, 'updateOrCreate').and.returnValue({
        $promise: df2.promise
      });

      spyOn($state, 'go').and.stub();

      scope.onSubmit();
      expect(scope.cause.organizationId).toEqual($rootScope.currentUser.organizationId);

      // impact goal should reset cause.totalGoal
      expect(scope.cause.totalGoal).toEqual(0);

      expect(scope.cause.impactGoal).not.toBeDefined();
      expect(scope.cause.goalAmount).not.toBeDefined();

      expect(Cause.updateOrCreate).toHaveBeenCalledWith(scope.cause);

      df.resolve({
        name: 'New Cause',
        featuredImage: 'http://test.com/image.png',
        position: {
          lat: '12.5',
          lng: '-55.167'
        },
        aspiration: 'Do a thing',
        indexText: 'Index text',
        body: 'Body of the cause',
        totalGoal: 1200,
        goalText: 'Text describing the goal',
        id: 3 // id exists in the response from the server
      });

      $rootScope.$digest();

      expect(ImpactGoal.updateOrCreate).toHaveBeenCalledWith({
        amount: impactGoalAmount,
        causeId: 3
      });

      df2.resolve();
      $rootScope.$apply();

      expect($state.go).toHaveBeenCalledWith('admin.causes');
    }));
  });

  describe('editing an existing Cause without an impact goal', function () {
    beforeEach(inject(function ($controller, $rootScope) {
      scope = $rootScope.$new();

      existingCause = mockCause;
      existingCause.id = 3;

      CauseFormCtrl = $controller('CauseFormCtrl', {
        $scope: scope,
        cause: existingCause,
        impactGoal: {}
      });

      $rootScope.currentUser = {
        email: 'test@test.com',
        organizationId: 1
      };
    }));

    it('should set the total goal of the form', function () {
      expect(scope.impactGoal).toEqual({});
      expect(scope.cause.goalAmount).toBe(scope.cause.totalGoal);
    });

    it('should allow deletion of the cause', inject(function (Cause, $q, $window, $state, $httpBackend) {
      var df = $q.defer();

      $httpBackend.expectGET('views/login.html').respond(201, '');

      spyOn(Cause, 'deleteById').and.returnValue({
        $promise: df.promise
      });
      spyOn($window, 'confirm').and.returnValue(true);
      //spyOn($rootScope, '$broadcast').and.stub();
      spyOn($state, 'go').and.stub();

      scope.deleteCause(existingCause);

      expect($window.confirm).toHaveBeenCalled();
      expect(Cause.deleteById).toHaveBeenCalledWith({ id: existingCause.id });

      df.resolve();
      scope.$apply();

      //expect($rootScope.$broadcast).toHaveBeenCalledWith('causes:updated');
      expect($state.go).toHaveBeenCalledWith('admin.causes');
    }));
  });

  describe('editing an existing Cause with an impact goal', function () {
    var impactGoal = {
      amount: 250,
      id: 3,
      causeId: 3
    };

    beforeEach(inject(function ($controller, $rootScope) {
      scope = $rootScope.$new();

      existingCause = mockCause;
      existingCause.id = 3;
      existingCause.totalGoal = 0;

      CauseFormCtrl = $controller('CauseFormCtrl', {
        $scope: scope,
        cause: existingCause,
        impactGoal: impactGoal
      });

      $rootScope.currentUser = {
        email: 'test@test.com',
        organizationId: 1
      };
    }));

    it('should set the total goal of the form to the impact goal amount', function () {
      expect(scope.cause.impactGoal).toBe(true);
      expect(scope.cause.goalAmount).toBe(impactGoal.amount);
    });

    it('should allow deletion of the cause and impact goal', inject(function (Cause, ImpactGoal, $q, $window, $state, $httpBackend) {
      var df = $q.defer();
      var df2 = $q.defer();

      $httpBackend.expectGET('views/login.html').respond(201, '');

      spyOn(Cause, 'deleteById').and.returnValue({
        $promise: df.promise
      });
      spyOn(ImpactGoal, 'deleteById').and.returnValue({
        $promise: df2.promise
      });
      spyOn($window, 'confirm').and.returnValue(true);
      //spyOn($rootScope, '$broadcast').and.stub();
      spyOn($state, 'go').and.stub();

      scope.deleteCause(existingCause);

      expect($window.confirm).toHaveBeenCalled();
      expect(Cause.deleteById).toHaveBeenCalledWith({ id: existingCause.id });
      expect(ImpactGoal.deleteById).toHaveBeenCalledWith({ id: impactGoal.id });

      df.resolve();
      df2.resolve();
      scope.$apply();

      //expect($rootScope.$broadcast).toHaveBeenCalledWith('causes:updated');
      expect($state.go).toHaveBeenCalledWith('admin.causes');
    }));
  });
});