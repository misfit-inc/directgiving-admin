'use strict';

describe('Controller: EntryListCtrl', function () {
  beforeEach(module('dgAdminApp'));

  var EntryListCtrl,
      scope,
      currentState;

  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();

    EntryListCtrl = $controller('EntryListCtrl', {
      $scope: scope,
      entries: [{"individual":true,"public":null,"title":"Take back","location":null,"body":"<p>Entry body<br/></p>","id":1,"donorId":null,"causeId":2,"createdAt":"2015-10-26T16:40:49.029Z","updatedAt":"2015-10-26T16:40:49.030Z"},{"individual":null,"public":true,"title":"The other entry","location":null,"body":"<p>Test interesting things here!<br/></p>","id":2,"donorId":null,"causeId":2,"createdAt":"2015-10-26T16:41:01.525Z","updatedAt":"2015-10-26T16:41:01.525Z"},{"individual":true,"public":true,"title":"Another entry for different cause","location":{"lng":-19.224,"lat":12.66},"body":"<p>Appear on the thing!<br/></p>","id":3,"donorId":null,"causeId":3,"createdAt":"2015-10-26T16:41:18.409Z","updatedAt":"2015-10-26T16:41:18.409Z"}],
    });
  }));

  it('should initialize the list of entries', function () {
    expect(scope.entries.length).toBe(3);
  });

  it('should not be loading once the controller initializes', function () {
    expect(scope.loading).toBe(false);
  });

  it('should reload entries on event broadcast', inject(function ($rootScope, Entry, $httpBackend, $q) {
    var df = $q.defer();
    //$httpBackend.expectGET('views/login.html').respond(201, '');
    spyOn(Entry, 'find').and.returnValue({
      $promise: df.promise
    });
    $rootScope.$broadcast('entries:updated');
    scope.$digest();

    expect(scope.loading).toBe(true);
    expect(Entry.find).toHaveBeenCalled();

    df.resolve();
    scope.$digest();

    expect(scope.loading).toBe(false);
  }));

  it('should have a formActive function', function () {
    expect(scope.formActive instanceof Function).toBe(true);
  });

  it('should activate the form when state is edit or new', inject(function ($state) {
    spyOn($state, 'go').and.callFake(function (state) {
      currentState = state;
    });

    spyOn($state, 'includes').and.callFake(function (check) {
      if (currentState.indexOf(check) > -1) {
        return true;
      } else {
        return false;
      }
    });

    $state.go('admin.entries.new');
    expect(scope.formActive()).toBe(true);

    $state.go('admin.entries');
    expect(scope.formActive()).toBe(false);

    $state.go('admin.entries.edit');
    expect(scope.formActive()).toBe(true);
  }));
});

describe('Controller: EntryFormCtrl', function () {
  beforeEach(module('dgAdminApp'));

  beforeEach(inject(function ($rootScope) {
    $rootScope.currentUser = {
      email: 'test@test.com',
      organizationId: 3
    };
  }));

  describe('creating a new entry', function () {
    var EntryFormCtrl,
        scope;

    beforeEach(inject(function ($controller, $rootScope) {
      scope = $rootScope.$new();

      EntryFormCtrl = $controller('EntryFormCtrl', {
        $scope: scope,
        entry: {}
      });
    }));

    it('should initialize an empty entry', function () {
      expect(scope.entry).toBeDefined();
      expect(scope.entry).toEqual({});
    });

    it('should initializes entryFields', function () {
      expect(scope.entryFields).toBeDefined();
      expect(scope.entryFields.length).toBeGreaterThan(0);
    });

    it('should have values set for every entry in entryFields', function () {
      for (var i = scope.entryFields.length - 1; i >= 0; i--) {
        expect(scope.entryFields[i].key).toBeDefined();
        expect(scope.entryFields[i].type).toBeDefined();
        expect(scope.entryFields[i].templateOptions).toBeDefined();
      }
    });

    it('should set options for the cause dropdown', inject(function (Cause) {
      spyOn(Cause, 'find').and.returnValue([{ id: 1 }, { id: 2 }, { id: 3 }]);
      expect(scope.entryFields[0].templateOptions.options).toBeDefined();
    }));

    it('should call the API when submitted', inject(function (Entry, $q, $rootScope, $state) {
      var df = $q.defer();
      spyOn($state, 'go').and.stub();
      spyOn(Entry, 'updateOrCreate').and.returnValue({
        $promise: df.promise
      });

      scope.entry = {
        causeId: 3,
        title: 'The Entry',
        body: 'Here is a great entry to post.',
        location: {
          lat: 45.5522,
          lng: -15.18297
        },
        individual: true
      };

      scope.onSubmit();

      expect(Entry.updateOrCreate).toHaveBeenCalledWith(scope.entry);

      df.resolve();
      scope.$apply();

      expect($state.go).toHaveBeenCalledWith('admin.entries');
    }));
  });    
});