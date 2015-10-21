'use strict';

angular.module('dgAuth', ['lbServices', 'LocalStorageModule', 'formly', 'ui.router'])

.factory('AuthService', function ($q, $rootScope, localStorageService, Admin) {
  // manage scope of user based on local storage
  $rootScope.$on('auth:login', function () {
    $rootScope.currentUser = localStorageService.get('currentUser');
  });

  $rootScope.$on('auth:logout', function () {
    $rootScope.currentUser = null;
  });

  return {
    /**
     * Logs a user into the LoopBack API
     * @param  {Object} user  User object, expects email and password attributes
     * @return {Promise}      Promise that resolves to the logged in user object or rejects with an error message
     */
    login: function (user) {
      var df = $q.defer();

      if (!user) {
        df.reject({ error: 'Login function requires a user object, which was not received.' });
      } else if (!user.password || !user.email) {
        df.reject({ error: 'Login function requires user object with email and password. Received: ' + JSON.stringify(user) });
      } else if (user.password && user.email) {
        Admin.login({ email: user.email, password: user.password })
        .$promise
        .then(function (response) {
          localStorageService.set('currentUser', {
            id: response.user.id,
            tokenId: response.id,
            email: response.user.email,
            organizationId: response.user.organizationId,
            stripeId: response.user.stripeId || null
          });
          $rootScope.$broadcast('auth:login');
          df.resolve(response);
        }, function (error) {
          df.reject(error);
        });
      }

      return df.promise;
    },
    /**
     * Logs a user out of the API, sends event
     * @return {Promise} Promise that resolves to a success upon logout or error upon failure
     */
    logout: function () {
      var df = $q.defer();

      Admin.logout()
      .$promise
      .then(function (response) {
        localStorageService.set('currentUser', null);
        $rootScope.$broadcast('auth:logout');
        df.resolve(response);
      }, function (error) {
        df.reject(error);
      });

      return df.promise;
    },
    /**
     * Creates a new user
     * @param  {Object} user  User object to create. Requires email and password.
     * @return {Promise}      Promise that resolves to user object if successful, or error if failure
     */
    register: function (user) {
      var df = $q.defer();

      if (user && user.email && user.password) {
        Admin.create(user)
        .$promise
        .then(function (response) {
          df.resolve(response);
        }, function (error) {
          df.reject(error);
        });
      } else {
        df.reject({ error: 'Registration requires a user object with email and password attributes.' });
      }

      return df.promise;
    }
  };
});