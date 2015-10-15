'use strict';

angular.module('dgAPI', [])
.constant('API_BASE', 'https://loopback-directgiving.herokuapp.com/api');

/**
 * @ngdoc overview
 * @name dgAdminApp
 * @description
 * # dgAdminApp
 *
 * Main module of the application.
 */
angular
  .module('dgAdminApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.router',
    'LocalStorageModule',
    'formly',
    'formlyBootstrap',
    'dgAuth',
    'dgAPI',
    'lbServices',
    'textAngular'
  ])
  .config(function ($stateProvider, $urlRouterProvider, API_BASE, LoopBackResourceProvider, $httpProvider, formlyConfigProvider, $provide) {

    LoopBackResourceProvider.setUrlBase(API_BASE);

    $urlRouterProvider.otherwise('/login');

    $stateProvider
      .state('login', {
        url: '/login',
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl'
      })
      .state('admin', {
        url: '',
        abstract: true,
        templateUrl: 'views/admin.html',
        controller: 'AdminCtrl'
      })
      .state('admin.dashboard', {
        url: '/dashboard',
        views: {
          'adminContent': {
            templateUrl: 'views/dashboard.html',
            controller: 'DashboardCtrl'
          }
        }
      })
      .state('admin.entries', {
        url: '/entries',
        views: {
          'adminContent': {
            templateUrl: 'views/entries.list.html',
            controller: 'EntryListCtrl',
            resolve: {
              entries: function (Entry) {
                return Entry.find();
              }
            }
          }
        }
      })
      .state('admin.entries.new', {
        url: '/new',
        templateUrl: 'views/entries.form.html',
        controller: 'EntryFormCtrl',
        resolve: {
          entry: function () {
            return {};
          }
        }
      })
      .state('admin.entries.edit', {
        url: '/edit/:entryId',
        templateUrl: 'views/entries.form.html',
        controller: 'EntryFormCtrl',
        resolve: {
          entry: function (Entry, $stateParams) {
            return Entry.findById({ id: $stateParams.entryId });
          }
        }
      })
      .state('admin.causes', {
        url: '/causes',
        views: {
          'adminContent': {
            templateUrl: 'views/causes.list.html',
            controller: 'CauseListCtrl',
            resolve: {
              causes: function (Cause) {
                return Cause.find();
              }
            }
          }
        }
      })
      .state('admin.causes.new', {
        url: '/new',
        templateUrl: 'views/causes.form.html',
        controller: 'CauseFormCtrl',
        resolve: {
          cause: function () {
            return {};
          }
        }
      })
      .state('admin.causes.edit', {
        url: '/edit/:causeId',
        templateUrl: 'views/causes.form.html',
        controller: 'CauseFormCtrl',
        resolve: {
          cause: function (Cause, $stateParams) {
            return Cause.findById({ id: $stateParams.causeId });
          }
        }
      })
      .state('admin.organization', {
        url: '/organization',
        views: {
          'adminContent': {
            templateUrl: 'views/organization.html',
            controller: 'OrganizationCtrl',
            resolve: {
              organization: function (Organization, localStorageService) {
                return Organization.findOne({ filter: { where: { id: localStorageService.get('currentUser').organizationId }}});
              }
            }
          }
        } 
      });

    $httpProvider.interceptors.push(function($q, $location, LoopBackAuth, localStorageService, $rootScope) {
      return {
        responseError: function(rejection) {
          if (rejection.status === 401) {
            //Now clearing the loopback values from client browser for safe logout...
            LoopBackAuth.clearUser();
            LoopBackAuth.clearStorage();
            localStorageService.set('currentUser', null);
            $rootScope.currentUser = null;
            $location.nextAfterLogin = $location.path();
            $location.path('/login');
          }
          return $q.reject(rejection);
        }
      };
    });

    formlyConfigProvider.setType({
      name: 'texteditor',
      template: '<text-angular ng-model="model[options.key]"></text-angular>'
    });

    /*$provide.decorator('taOptions', function ($delegate) {
      return {
        toolbar: [
          ['h1', 'h2', 'h3', 'p', 'quote', 'bold', 'italics', 'underline', 'ul', 'ol'],
          ['html', 'insertImage', 'insertLink', 'insertVideo']
          //['bold', 'italics', 'underline', 'strikeThrough', 'ul', 'ol', 'redo', 'undo', 'clear'],
          //['html', 'insertImage','insertLink', 'insertVideo']
        ]
      };
    });*/
  })
  .controller('BodyCtrl', function ($scope, $state) {
    $scope.isLoginPage = function () {
      return $state.includes('login');
    };
  });
