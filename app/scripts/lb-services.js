(function(window, angular, undefined) {'use strict';

var urlBase = "/api";
var authHeader = 'authorization';

/**
 * @ngdoc overview
 * @name lbServices
 * @module
 * @description
 *
 * The `lbServices` module provides services for interacting with
 * the models exposed by the LoopBack server via the REST API.
 *
 */
var module = angular.module("lbServices", ['ngResource']);

/**
 * @ngdoc object
 * @name lbServices.Email
 * @header lbServices.Email
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Email` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Email",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/Emails/:id",
      { 'id': '@id' },
      {
      }
    );




    /**
    * @ngdoc property
    * @name lbServices.Email#modelName
    * @propertyOf lbServices.Email
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Email`.
    */
    R.modelName = "Email";


    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.User
 * @header lbServices.User
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `User` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "User",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/Users/:id",
      { 'id': '@id' },
      {

        /**
         * @ngdoc method
         * @name lbServices.User#prototype$__findById__accessTokens
         * @methodOf lbServices.User
         *
         * @description
         *
         * Find a related item by id for accessTokens.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for accessTokens
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "prototype$__findById__accessTokens": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Users/:id/accessTokens/:fk",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#prototype$__destroyById__accessTokens
         * @methodOf lbServices.User
         *
         * @description
         *
         * Delete a related item by id for accessTokens.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for accessTokens
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "prototype$__destroyById__accessTokens": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Users/:id/accessTokens/:fk",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#prototype$__updateById__accessTokens
         * @methodOf lbServices.User
         *
         * @description
         *
         * Update a related item by id for accessTokens.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for accessTokens
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "prototype$__updateById__accessTokens": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Users/:id/accessTokens/:fk",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#prototype$__get__accessTokens
         * @methodOf lbServices.User
         *
         * @description
         *
         * Queries accessTokens of User.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "prototype$__get__accessTokens": {
          isArray: true,
          url: urlBase + "/Users/:id/accessTokens",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#prototype$__create__accessTokens
         * @methodOf lbServices.User
         *
         * @description
         *
         * Creates a new instance in accessTokens of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "prototype$__create__accessTokens": {
          url: urlBase + "/Users/:id/accessTokens",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#prototype$__delete__accessTokens
         * @methodOf lbServices.User
         *
         * @description
         *
         * Deletes all accessTokens of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "prototype$__delete__accessTokens": {
          url: urlBase + "/Users/:id/accessTokens",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#prototype$__count__accessTokens
         * @methodOf lbServices.User
         *
         * @description
         *
         * Counts accessTokens of User.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "prototype$__count__accessTokens": {
          url: urlBase + "/Users/:id/accessTokens/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#create
         * @methodOf lbServices.User
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/Users",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#createMany
         * @methodOf lbServices.User
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/Users",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#upsert
         * @methodOf lbServices.User
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/Users",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#exists
         * @methodOf lbServices.User
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/Users/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#findById
         * @methodOf lbServices.User
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/Users/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#find
         * @methodOf lbServices.User
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/Users",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#findOne
         * @methodOf lbServices.User
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/Users/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#updateAll
         * @methodOf lbServices.User
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "updateAll": {
          url: urlBase + "/Users/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#deleteById
         * @methodOf lbServices.User
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "deleteById": {
          url: urlBase + "/Users/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#count
         * @methodOf lbServices.User
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/Users/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#prototype$updateAttributes
         * @methodOf lbServices.User
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/Users/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#createChangeStream
         * @methodOf lbServices.User
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/Users/change-stream",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#login
         * @methodOf lbServices.User
         *
         * @description
         *
         * Login a user with username/email and password.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `include` – `{string=}` - Related objects to include in the response. See the description of return value for more details.
         *   Default value: `user`.
         *
         *  - `rememberMe` - `boolean` - Whether the authentication credentials
         *     should be remembered in localStorage across app/browser restarts.
         *     Default: `true`.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The response body contains properties of the AccessToken created on login.
         * Depending on the value of `include` parameter, the body may contain additional properties:
         * 
         *   - `user` - `{User}` - Data of the currently logged in user. (`include=user`)
         * 
         *
         */
        "login": {
          params: {
            include: "user"
          },
          interceptor: {
            response: function(response) {
              var accessToken = response.data;
              LoopBackAuth.setUser(accessToken.id, accessToken.userId, accessToken.user);
              LoopBackAuth.rememberMe = response.config.params.rememberMe !== false;
              LoopBackAuth.save();
              return response.resource;
            }
          },
          url: urlBase + "/Users/login",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#logout
         * @methodOf lbServices.User
         *
         * @description
         *
         * Logout a user with access token.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `access_token` – `{string}` - Do not supply this argument, it is automatically extracted from request headers.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "logout": {
          interceptor: {
            response: function(response) {
              LoopBackAuth.clearUser();
              LoopBackAuth.clearStorage();
              return response.resource;
            }
          },
          url: urlBase + "/Users/logout",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#confirm
         * @methodOf lbServices.User
         *
         * @description
         *
         * Confirm a user registration with email verification token.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `uid` – `{string}` - 
         *
         *  - `token` – `{string}` - 
         *
         *  - `redirect` – `{string=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "confirm": {
          url: urlBase + "/Users/confirm",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#resetPassword
         * @methodOf lbServices.User
         *
         * @description
         *
         * Reset password for a user with email.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "resetPassword": {
          url: urlBase + "/Users/reset",
          method: "POST"
        },

        // INTERNAL. Use UserCredential.user() instead.
        "::get::UserCredential::user": {
          url: urlBase + "/UserCredentials/:id/user",
          method: "GET"
        },

        // INTERNAL. Use UserIdentity.user() instead.
        "::get::UserIdentity::user": {
          url: urlBase + "/UserIdentities/:id/user",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#getCurrent
         * @methodOf lbServices.User
         *
         * @description
         *
         * Get data of the currently logged user. Fail with HTTP result 401
         * when there is no user logged in.
         *
         * @param {function(Object,Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "getCurrent": {
           url: urlBase + "/Users" + "/:id",
           method: "GET",
           params: {
             id: function() {
              var id = LoopBackAuth.currentUserId;
              if (id == null) id = '__anonymous__';
              return id;
            },
          },
          interceptor: {
            response: function(response) {
              LoopBackAuth.currentUserData = response.data;
              return response.resource;
            }
          },
          __isGetCurrentUser__ : true
        }
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.User#updateOrCreate
         * @methodOf lbServices.User
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.User#update
         * @methodOf lbServices.User
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.User#destroyById
         * @methodOf lbServices.User
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.User#removeById
         * @methodOf lbServices.User
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["removeById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.User#getCachedCurrent
         * @methodOf lbServices.User
         *
         * @description
         *
         * Get data of the currently logged user that was returned by the last
         * call to {@link lbServices.User#login} or
         * {@link lbServices.User#getCurrent}. Return null when there
         * is no user logged in or the data of the current user were not fetched
         * yet.
         *
         * @returns {Object} A User instance.
         */
        R.getCachedCurrent = function() {
          var data = LoopBackAuth.currentUserData;
          return data ? new R(data) : null;
        };

        /**
         * @ngdoc method
         * @name lbServices.User#isAuthenticated
         * @methodOf lbServices.User
         *
         * @returns {boolean} True if the current user is authenticated (logged in).
         */
        R.isAuthenticated = function() {
          return this.getCurrentId() != null;
        };

        /**
         * @ngdoc method
         * @name lbServices.User#getCurrentId
         * @methodOf lbServices.User
         *
         * @returns {Object} Id of the currently logged-in user or null.
         */
        R.getCurrentId = function() {
          return LoopBackAuth.currentUserId;
        };

    /**
    * @ngdoc property
    * @name lbServices.User#modelName
    * @propertyOf lbServices.User
    * @description
    * The name of the model represented by this $resource,
    * i.e. `User`.
    */
    R.modelName = "User";


    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Donor
 * @header lbServices.Donor
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Donor` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Donor",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/donors/:id",
      { 'id': '@id' },
      {

        /**
         * @ngdoc method
         * @name lbServices.Donor#prototype$__findById__accessTokens
         * @methodOf lbServices.Donor
         *
         * @description
         *
         * Find a related item by id for accessTokens.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for accessTokens
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Donor` object.)
         * </em>
         */
        "prototype$__findById__accessTokens": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/donors/:id/accessTokens/:fk",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Donor#prototype$__destroyById__accessTokens
         * @methodOf lbServices.Donor
         *
         * @description
         *
         * Delete a related item by id for accessTokens.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for accessTokens
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "prototype$__destroyById__accessTokens": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/donors/:id/accessTokens/:fk",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Donor#prototype$__updateById__accessTokens
         * @methodOf lbServices.Donor
         *
         * @description
         *
         * Update a related item by id for accessTokens.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for accessTokens
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Donor` object.)
         * </em>
         */
        "prototype$__updateById__accessTokens": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/donors/:id/accessTokens/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Donor.causes.findById() instead.
        "prototype$__findById__causes": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/donors/:id/causes/:fk",
          method: "GET"
        },

        // INTERNAL. Use Donor.causes.destroyById() instead.
        "prototype$__destroyById__causes": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/donors/:id/causes/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Donor.causes.updateById() instead.
        "prototype$__updateById__causes": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/donors/:id/causes/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Donor.causes.link() instead.
        "prototype$__link__causes": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/donors/:id/causes/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Donor.causes.unlink() instead.
        "prototype$__unlink__causes": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/donors/:id/causes/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Donor.causes.exists() instead.
        "prototype$__exists__causes": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/donors/:id/causes/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use Donor.waitingForContentFrom.findById() instead.
        "prototype$__findById__waitingForContentFrom": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/donors/:id/waitingForContentFrom/:fk",
          method: "GET"
        },

        // INTERNAL. Use Donor.waitingForContentFrom.destroyById() instead.
        "prototype$__destroyById__waitingForContentFrom": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/donors/:id/waitingForContentFrom/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Donor.waitingForContentFrom.updateById() instead.
        "prototype$__updateById__waitingForContentFrom": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/donors/:id/waitingForContentFrom/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Donor.entries.findById() instead.
        "prototype$__findById__entries": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/donors/:id/entries/:fk",
          method: "GET"
        },

        // INTERNAL. Use Donor.entries.destroyById() instead.
        "prototype$__destroyById__entries": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/donors/:id/entries/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Donor.entries.updateById() instead.
        "prototype$__updateById__entries": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/donors/:id/entries/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Donor.identities.findById() instead.
        "prototype$__findById__identities": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/donors/:id/identities/:fk",
          method: "GET"
        },

        // INTERNAL. Use Donor.identities.destroyById() instead.
        "prototype$__destroyById__identities": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/donors/:id/identities/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Donor.identities.updateById() instead.
        "prototype$__updateById__identities": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/donors/:id/identities/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Donor.credentials.findById() instead.
        "prototype$__findById__credentials": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/donors/:id/credentials/:fk",
          method: "GET"
        },

        // INTERNAL. Use Donor.credentials.destroyById() instead.
        "prototype$__destroyById__credentials": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/donors/:id/credentials/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Donor.credentials.updateById() instead.
        "prototype$__updateById__credentials": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/donors/:id/credentials/:fk",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Donor#prototype$__get__accessTokens
         * @methodOf lbServices.Donor
         *
         * @description
         *
         * Queries accessTokens of donor.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Donor` object.)
         * </em>
         */
        "prototype$__get__accessTokens": {
          isArray: true,
          url: urlBase + "/donors/:id/accessTokens",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Donor#prototype$__create__accessTokens
         * @methodOf lbServices.Donor
         *
         * @description
         *
         * Creates a new instance in accessTokens of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Donor` object.)
         * </em>
         */
        "prototype$__create__accessTokens": {
          url: urlBase + "/donors/:id/accessTokens",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Donor#prototype$__delete__accessTokens
         * @methodOf lbServices.Donor
         *
         * @description
         *
         * Deletes all accessTokens of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "prototype$__delete__accessTokens": {
          url: urlBase + "/donors/:id/accessTokens",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Donor#prototype$__count__accessTokens
         * @methodOf lbServices.Donor
         *
         * @description
         *
         * Counts accessTokens of donor.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "prototype$__count__accessTokens": {
          url: urlBase + "/donors/:id/accessTokens/count",
          method: "GET"
        },

        // INTERNAL. Use Donor.causes() instead.
        "prototype$__get__causes": {
          isArray: true,
          url: urlBase + "/donors/:id/causes",
          method: "GET"
        },

        // INTERNAL. Use Donor.causes.create() instead.
        "prototype$__create__causes": {
          url: urlBase + "/donors/:id/causes",
          method: "POST"
        },

        // INTERNAL. Use Donor.causes.destroyAll() instead.
        "prototype$__delete__causes": {
          url: urlBase + "/donors/:id/causes",
          method: "DELETE"
        },

        // INTERNAL. Use Donor.causes.count() instead.
        "prototype$__count__causes": {
          url: urlBase + "/donors/:id/causes/count",
          method: "GET"
        },

        // INTERNAL. Use Donor.waitingForContentFrom() instead.
        "prototype$__get__waitingForContentFrom": {
          isArray: true,
          url: urlBase + "/donors/:id/waitingForContentFrom",
          method: "GET"
        },

        // INTERNAL. Use Donor.waitingForContentFrom.create() instead.
        "prototype$__create__waitingForContentFrom": {
          url: urlBase + "/donors/:id/waitingForContentFrom",
          method: "POST"
        },

        // INTERNAL. Use Donor.waitingForContentFrom.destroyAll() instead.
        "prototype$__delete__waitingForContentFrom": {
          url: urlBase + "/donors/:id/waitingForContentFrom",
          method: "DELETE"
        },

        // INTERNAL. Use Donor.waitingForContentFrom.count() instead.
        "prototype$__count__waitingForContentFrom": {
          url: urlBase + "/donors/:id/waitingForContentFrom/count",
          method: "GET"
        },

        // INTERNAL. Use Donor.entries() instead.
        "prototype$__get__entries": {
          isArray: true,
          url: urlBase + "/donors/:id/entries",
          method: "GET"
        },

        // INTERNAL. Use Donor.entries.create() instead.
        "prototype$__create__entries": {
          url: urlBase + "/donors/:id/entries",
          method: "POST"
        },

        // INTERNAL. Use Donor.entries.destroyAll() instead.
        "prototype$__delete__entries": {
          url: urlBase + "/donors/:id/entries",
          method: "DELETE"
        },

        // INTERNAL. Use Donor.entries.count() instead.
        "prototype$__count__entries": {
          url: urlBase + "/donors/:id/entries/count",
          method: "GET"
        },

        // INTERNAL. Use Donor.identities() instead.
        "prototype$__get__identities": {
          isArray: true,
          url: urlBase + "/donors/:id/identities",
          method: "GET"
        },

        // INTERNAL. Use Donor.identities.create() instead.
        "prototype$__create__identities": {
          url: urlBase + "/donors/:id/identities",
          method: "POST"
        },

        // INTERNAL. Use Donor.identities.destroyAll() instead.
        "prototype$__delete__identities": {
          url: urlBase + "/donors/:id/identities",
          method: "DELETE"
        },

        // INTERNAL. Use Donor.identities.count() instead.
        "prototype$__count__identities": {
          url: urlBase + "/donors/:id/identities/count",
          method: "GET"
        },

        // INTERNAL. Use Donor.credentials() instead.
        "prototype$__get__credentials": {
          isArray: true,
          url: urlBase + "/donors/:id/credentials",
          method: "GET"
        },

        // INTERNAL. Use Donor.credentials.create() instead.
        "prototype$__create__credentials": {
          url: urlBase + "/donors/:id/credentials",
          method: "POST"
        },

        // INTERNAL. Use Donor.credentials.destroyAll() instead.
        "prototype$__delete__credentials": {
          url: urlBase + "/donors/:id/credentials",
          method: "DELETE"
        },

        // INTERNAL. Use Donor.credentials.count() instead.
        "prototype$__count__credentials": {
          url: urlBase + "/donors/:id/credentials/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Donor#create
         * @methodOf lbServices.Donor
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Donor` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/donors",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Donor#createMany
         * @methodOf lbServices.Donor
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Donor` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/donors",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Donor#upsert
         * @methodOf lbServices.Donor
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Donor` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/donors",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Donor#exists
         * @methodOf lbServices.Donor
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/donors/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Donor#findById
         * @methodOf lbServices.Donor
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Donor` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/donors/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Donor#find
         * @methodOf lbServices.Donor
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Donor` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/donors",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Donor#findOne
         * @methodOf lbServices.Donor
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Donor` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/donors/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Donor#updateAll
         * @methodOf lbServices.Donor
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "updateAll": {
          url: urlBase + "/donors/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Donor#deleteById
         * @methodOf lbServices.Donor
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "deleteById": {
          url: urlBase + "/donors/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Donor#count
         * @methodOf lbServices.Donor
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/donors/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Donor#prototype$updateAttributes
         * @methodOf lbServices.Donor
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Donor` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/donors/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Donor#createChangeStream
         * @methodOf lbServices.Donor
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/donors/change-stream",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Donor#login
         * @methodOf lbServices.Donor
         *
         * @description
         *
         * Login a user with username/email and password.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `include` – `{string=}` - Related objects to include in the response. See the description of return value for more details.
         *   Default value: `user`.
         *
         *  - `rememberMe` - `boolean` - Whether the authentication credentials
         *     should be remembered in localStorage across app/browser restarts.
         *     Default: `true`.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The response body contains properties of the AccessToken created on login.
         * Depending on the value of `include` parameter, the body may contain additional properties:
         * 
         *   - `user` - `{User}` - Data of the currently logged in user. (`include=user`)
         * 
         *
         */
        "login": {
          params: {
            include: "user"
          },
          interceptor: {
            response: function(response) {
              var accessToken = response.data;
              LoopBackAuth.setUser(accessToken.id, accessToken.userId, accessToken.user);
              LoopBackAuth.rememberMe = response.config.params.rememberMe !== false;
              LoopBackAuth.save();
              return response.resource;
            }
          },
          url: urlBase + "/donors/login",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Donor#logout
         * @methodOf lbServices.Donor
         *
         * @description
         *
         * Logout a user with access token.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `access_token` – `{string}` - Do not supply this argument, it is automatically extracted from request headers.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "logout": {
          interceptor: {
            response: function(response) {
              LoopBackAuth.clearUser();
              LoopBackAuth.clearStorage();
              return response.resource;
            }
          },
          url: urlBase + "/donors/logout",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Donor#confirm
         * @methodOf lbServices.Donor
         *
         * @description
         *
         * Confirm a user registration with email verification token.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `uid` – `{string}` - 
         *
         *  - `token` – `{string}` - 
         *
         *  - `redirect` – `{string=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "confirm": {
          url: urlBase + "/donors/confirm",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Donor#resetPassword
         * @methodOf lbServices.Donor
         *
         * @description
         *
         * Reset password for a user with email.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "resetPassword": {
          url: urlBase + "/donors/reset",
          method: "POST"
        },

        // INTERNAL. Use Cause.donors.findById() instead.
        "::findById::Cause::donors": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Causes/:id/donors/:fk",
          method: "GET"
        },

        // INTERNAL. Use Cause.donors.destroyById() instead.
        "::destroyById::Cause::donors": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Causes/:id/donors/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Cause.donors.updateById() instead.
        "::updateById::Cause::donors": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Causes/:id/donors/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Cause.donors() instead.
        "::get::Cause::donors": {
          isArray: true,
          url: urlBase + "/Causes/:id/donors",
          method: "GET"
        },

        // INTERNAL. Use Cause.donors.create() instead.
        "::create::Cause::donors": {
          url: urlBase + "/Causes/:id/donors",
          method: "POST"
        },

        // INTERNAL. Use Cause.donors.createMany() instead.
        "::createMany::Cause::donors": {
          isArray: true,
          url: urlBase + "/Causes/:id/donors",
          method: "POST"
        },

        // INTERNAL. Use Cause.donors.destroyAll() instead.
        "::delete::Cause::donors": {
          url: urlBase + "/Causes/:id/donors",
          method: "DELETE"
        },

        // INTERNAL. Use Cause.donors.count() instead.
        "::count::Cause::donors": {
          url: urlBase + "/Causes/:id/donors/count",
          method: "GET"
        },

        // INTERNAL. Use Entry.donor() instead.
        "::get::entry::donor": {
          url: urlBase + "/entries/:id/donor",
          method: "GET"
        },

        // INTERNAL. Use Donation.donor() instead.
        "::get::Donation::donor": {
          url: urlBase + "/Donations/:id/donor",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Donor#getCurrent
         * @methodOf lbServices.Donor
         *
         * @description
         *
         * Get data of the currently logged user. Fail with HTTP result 401
         * when there is no user logged in.
         *
         * @param {function(Object,Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "getCurrent": {
           url: urlBase + "/donors" + "/:id",
           method: "GET",
           params: {
             id: function() {
              var id = LoopBackAuth.currentUserId;
              if (id == null) id = '__anonymous__';
              return id;
            },
          },
          interceptor: {
            response: function(response) {
              LoopBackAuth.currentUserData = response.data;
              return response.resource;
            }
          },
          __isGetCurrentUser__ : true
        }
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Donor#updateOrCreate
         * @methodOf lbServices.Donor
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Donor` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Donor#update
         * @methodOf lbServices.Donor
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.Donor#destroyById
         * @methodOf lbServices.Donor
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Donor#removeById
         * @methodOf lbServices.Donor
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["removeById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Donor#getCachedCurrent
         * @methodOf lbServices.Donor
         *
         * @description
         *
         * Get data of the currently logged user that was returned by the last
         * call to {@link lbServices.Donor#login} or
         * {@link lbServices.Donor#getCurrent}. Return null when there
         * is no user logged in or the data of the current user were not fetched
         * yet.
         *
         * @returns {Object} A Donor instance.
         */
        R.getCachedCurrent = function() {
          var data = LoopBackAuth.currentUserData;
          return data ? new R(data) : null;
        };

        /**
         * @ngdoc method
         * @name lbServices.Donor#isAuthenticated
         * @methodOf lbServices.Donor
         *
         * @returns {boolean} True if the current user is authenticated (logged in).
         */
        R.isAuthenticated = function() {
          return this.getCurrentId() != null;
        };

        /**
         * @ngdoc method
         * @name lbServices.Donor#getCurrentId
         * @methodOf lbServices.Donor
         *
         * @returns {Object} Id of the currently logged-in user or null.
         */
        R.getCurrentId = function() {
          return LoopBackAuth.currentUserId;
        };

    /**
    * @ngdoc property
    * @name lbServices.Donor#modelName
    * @propertyOf lbServices.Donor
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Donor`.
    */
    R.modelName = "Donor";

    /**
     * @ngdoc object
     * @name lbServices.Donor.causes
     * @header lbServices.Donor.causes
     * @object
     * @description
     *
     * The object `Donor.causes` groups methods
     * manipulating `Cause` instances related to `Donor`.
     *
     * Call {@link lbServices.Donor#causes Donor.causes()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Donor#causes
         * @methodOf lbServices.Donor
         *
         * @description
         *
         * Queries causes of donor.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Cause` object.)
         * </em>
         */
        R.causes = function() {
          var TargetResource = $injector.get("Cause");
          var action = TargetResource["::get::donor::causes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Donor.causes#count
         * @methodOf lbServices.Donor.causes
         *
         * @description
         *
         * Counts causes of donor.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.causes.count = function() {
          var TargetResource = $injector.get("Cause");
          var action = TargetResource["::count::donor::causes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Donor.causes#create
         * @methodOf lbServices.Donor.causes
         *
         * @description
         *
         * Creates a new instance in causes of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Cause` object.)
         * </em>
         */
        R.causes.create = function() {
          var TargetResource = $injector.get("Cause");
          var action = TargetResource["::create::donor::causes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Donor.causes#createMany
         * @methodOf lbServices.Donor.causes
         *
         * @description
         *
         * Creates a new instance in causes of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Cause` object.)
         * </em>
         */
        R.causes.createMany = function() {
          var TargetResource = $injector.get("Cause");
          var action = TargetResource["::createMany::donor::causes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Donor.causes#destroyAll
         * @methodOf lbServices.Donor.causes
         *
         * @description
         *
         * Deletes all causes of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.causes.destroyAll = function() {
          var TargetResource = $injector.get("Cause");
          var action = TargetResource["::delete::donor::causes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Donor.causes#destroyById
         * @methodOf lbServices.Donor.causes
         *
         * @description
         *
         * Delete a related item by id for causes.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for causes
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.causes.destroyById = function() {
          var TargetResource = $injector.get("Cause");
          var action = TargetResource["::destroyById::donor::causes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Donor.causes#exists
         * @methodOf lbServices.Donor.causes
         *
         * @description
         *
         * Check the existence of causes relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for causes
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Cause` object.)
         * </em>
         */
        R.causes.exists = function() {
          var TargetResource = $injector.get("Cause");
          var action = TargetResource["::exists::donor::causes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Donor.causes#findById
         * @methodOf lbServices.Donor.causes
         *
         * @description
         *
         * Find a related item by id for causes.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for causes
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Cause` object.)
         * </em>
         */
        R.causes.findById = function() {
          var TargetResource = $injector.get("Cause");
          var action = TargetResource["::findById::donor::causes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Donor.causes#link
         * @methodOf lbServices.Donor.causes
         *
         * @description
         *
         * Add a related item by id for causes.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for causes
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Cause` object.)
         * </em>
         */
        R.causes.link = function() {
          var TargetResource = $injector.get("Cause");
          var action = TargetResource["::link::donor::causes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Donor.causes#unlink
         * @methodOf lbServices.Donor.causes
         *
         * @description
         *
         * Remove the causes relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for causes
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.causes.unlink = function() {
          var TargetResource = $injector.get("Cause");
          var action = TargetResource["::unlink::donor::causes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Donor.causes#updateById
         * @methodOf lbServices.Donor.causes
         *
         * @description
         *
         * Update a related item by id for causes.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for causes
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Cause` object.)
         * </em>
         */
        R.causes.updateById = function() {
          var TargetResource = $injector.get("Cause");
          var action = TargetResource["::updateById::donor::causes"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Donor.waitingForContentFrom
     * @header lbServices.Donor.waitingForContentFrom
     * @object
     * @description
     *
     * The object `Donor.waitingForContentFrom` groups methods
     * manipulating `Cause` instances related to `Donor`.
     *
     * Call {@link lbServices.Donor#waitingForContentFrom Donor.waitingForContentFrom()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Donor#waitingForContentFrom
         * @methodOf lbServices.Donor
         *
         * @description
         *
         * Queries waitingForContentFrom of donor.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Cause` object.)
         * </em>
         */
        R.waitingForContentFrom = function() {
          var TargetResource = $injector.get("Cause");
          var action = TargetResource["::get::donor::waitingForContentFrom"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Donor.waitingForContentFrom#count
         * @methodOf lbServices.Donor.waitingForContentFrom
         *
         * @description
         *
         * Counts waitingForContentFrom of donor.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.waitingForContentFrom.count = function() {
          var TargetResource = $injector.get("Cause");
          var action = TargetResource["::count::donor::waitingForContentFrom"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Donor.waitingForContentFrom#create
         * @methodOf lbServices.Donor.waitingForContentFrom
         *
         * @description
         *
         * Creates a new instance in waitingForContentFrom of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Cause` object.)
         * </em>
         */
        R.waitingForContentFrom.create = function() {
          var TargetResource = $injector.get("Cause");
          var action = TargetResource["::create::donor::waitingForContentFrom"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Donor.waitingForContentFrom#createMany
         * @methodOf lbServices.Donor.waitingForContentFrom
         *
         * @description
         *
         * Creates a new instance in waitingForContentFrom of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Cause` object.)
         * </em>
         */
        R.waitingForContentFrom.createMany = function() {
          var TargetResource = $injector.get("Cause");
          var action = TargetResource["::createMany::donor::waitingForContentFrom"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Donor.waitingForContentFrom#destroyAll
         * @methodOf lbServices.Donor.waitingForContentFrom
         *
         * @description
         *
         * Deletes all waitingForContentFrom of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.waitingForContentFrom.destroyAll = function() {
          var TargetResource = $injector.get("Cause");
          var action = TargetResource["::delete::donor::waitingForContentFrom"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Donor.waitingForContentFrom#destroyById
         * @methodOf lbServices.Donor.waitingForContentFrom
         *
         * @description
         *
         * Delete a related item by id for waitingForContentFrom.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for waitingForContentFrom
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.waitingForContentFrom.destroyById = function() {
          var TargetResource = $injector.get("Cause");
          var action = TargetResource["::destroyById::donor::waitingForContentFrom"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Donor.waitingForContentFrom#findById
         * @methodOf lbServices.Donor.waitingForContentFrom
         *
         * @description
         *
         * Find a related item by id for waitingForContentFrom.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for waitingForContentFrom
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Cause` object.)
         * </em>
         */
        R.waitingForContentFrom.findById = function() {
          var TargetResource = $injector.get("Cause");
          var action = TargetResource["::findById::donor::waitingForContentFrom"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Donor.waitingForContentFrom#updateById
         * @methodOf lbServices.Donor.waitingForContentFrom
         *
         * @description
         *
         * Update a related item by id for waitingForContentFrom.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for waitingForContentFrom
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Cause` object.)
         * </em>
         */
        R.waitingForContentFrom.updateById = function() {
          var TargetResource = $injector.get("Cause");
          var action = TargetResource["::updateById::donor::waitingForContentFrom"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Donor.entries
     * @header lbServices.Donor.entries
     * @object
     * @description
     *
     * The object `Donor.entries` groups methods
     * manipulating `Entry` instances related to `Donor`.
     *
     * Call {@link lbServices.Donor#entries Donor.entries()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Donor#entries
         * @methodOf lbServices.Donor
         *
         * @description
         *
         * Queries entries of donor.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Entry` object.)
         * </em>
         */
        R.entries = function() {
          var TargetResource = $injector.get("Entry");
          var action = TargetResource["::get::donor::entries"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Donor.entries#count
         * @methodOf lbServices.Donor.entries
         *
         * @description
         *
         * Counts entries of donor.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.entries.count = function() {
          var TargetResource = $injector.get("Entry");
          var action = TargetResource["::count::donor::entries"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Donor.entries#create
         * @methodOf lbServices.Donor.entries
         *
         * @description
         *
         * Creates a new instance in entries of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Entry` object.)
         * </em>
         */
        R.entries.create = function() {
          var TargetResource = $injector.get("Entry");
          var action = TargetResource["::create::donor::entries"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Donor.entries#createMany
         * @methodOf lbServices.Donor.entries
         *
         * @description
         *
         * Creates a new instance in entries of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Entry` object.)
         * </em>
         */
        R.entries.createMany = function() {
          var TargetResource = $injector.get("Entry");
          var action = TargetResource["::createMany::donor::entries"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Donor.entries#destroyAll
         * @methodOf lbServices.Donor.entries
         *
         * @description
         *
         * Deletes all entries of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.entries.destroyAll = function() {
          var TargetResource = $injector.get("Entry");
          var action = TargetResource["::delete::donor::entries"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Donor.entries#destroyById
         * @methodOf lbServices.Donor.entries
         *
         * @description
         *
         * Delete a related item by id for entries.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for entries
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.entries.destroyById = function() {
          var TargetResource = $injector.get("Entry");
          var action = TargetResource["::destroyById::donor::entries"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Donor.entries#findById
         * @methodOf lbServices.Donor.entries
         *
         * @description
         *
         * Find a related item by id for entries.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for entries
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Entry` object.)
         * </em>
         */
        R.entries.findById = function() {
          var TargetResource = $injector.get("Entry");
          var action = TargetResource["::findById::donor::entries"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Donor.entries#updateById
         * @methodOf lbServices.Donor.entries
         *
         * @description
         *
         * Update a related item by id for entries.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for entries
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Entry` object.)
         * </em>
         */
        R.entries.updateById = function() {
          var TargetResource = $injector.get("Entry");
          var action = TargetResource["::updateById::donor::entries"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Donor.identities
     * @header lbServices.Donor.identities
     * @object
     * @description
     *
     * The object `Donor.identities` groups methods
     * manipulating `UserIdentity` instances related to `Donor`.
     *
     * Call {@link lbServices.Donor#identities Donor.identities()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Donor#identities
         * @methodOf lbServices.Donor
         *
         * @description
         *
         * Queries identities of donor.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `UserIdentity` object.)
         * </em>
         */
        R.identities = function() {
          var TargetResource = $injector.get("UserIdentity");
          var action = TargetResource["::get::donor::identities"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Donor.identities#count
         * @methodOf lbServices.Donor.identities
         *
         * @description
         *
         * Counts identities of donor.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.identities.count = function() {
          var TargetResource = $injector.get("UserIdentity");
          var action = TargetResource["::count::donor::identities"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Donor.identities#create
         * @methodOf lbServices.Donor.identities
         *
         * @description
         *
         * Creates a new instance in identities of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `UserIdentity` object.)
         * </em>
         */
        R.identities.create = function() {
          var TargetResource = $injector.get("UserIdentity");
          var action = TargetResource["::create::donor::identities"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Donor.identities#createMany
         * @methodOf lbServices.Donor.identities
         *
         * @description
         *
         * Creates a new instance in identities of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `UserIdentity` object.)
         * </em>
         */
        R.identities.createMany = function() {
          var TargetResource = $injector.get("UserIdentity");
          var action = TargetResource["::createMany::donor::identities"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Donor.identities#destroyAll
         * @methodOf lbServices.Donor.identities
         *
         * @description
         *
         * Deletes all identities of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.identities.destroyAll = function() {
          var TargetResource = $injector.get("UserIdentity");
          var action = TargetResource["::delete::donor::identities"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Donor.identities#destroyById
         * @methodOf lbServices.Donor.identities
         *
         * @description
         *
         * Delete a related item by id for identities.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for identities
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.identities.destroyById = function() {
          var TargetResource = $injector.get("UserIdentity");
          var action = TargetResource["::destroyById::donor::identities"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Donor.identities#findById
         * @methodOf lbServices.Donor.identities
         *
         * @description
         *
         * Find a related item by id for identities.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for identities
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `UserIdentity` object.)
         * </em>
         */
        R.identities.findById = function() {
          var TargetResource = $injector.get("UserIdentity");
          var action = TargetResource["::findById::donor::identities"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Donor.identities#updateById
         * @methodOf lbServices.Donor.identities
         *
         * @description
         *
         * Update a related item by id for identities.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for identities
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `UserIdentity` object.)
         * </em>
         */
        R.identities.updateById = function() {
          var TargetResource = $injector.get("UserIdentity");
          var action = TargetResource["::updateById::donor::identities"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Donor.credentials
     * @header lbServices.Donor.credentials
     * @object
     * @description
     *
     * The object `Donor.credentials` groups methods
     * manipulating `UserCredential` instances related to `Donor`.
     *
     * Call {@link lbServices.Donor#credentials Donor.credentials()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Donor#credentials
         * @methodOf lbServices.Donor
         *
         * @description
         *
         * Queries credentials of donor.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `UserCredential` object.)
         * </em>
         */
        R.credentials = function() {
          var TargetResource = $injector.get("UserCredential");
          var action = TargetResource["::get::donor::credentials"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Donor.credentials#count
         * @methodOf lbServices.Donor.credentials
         *
         * @description
         *
         * Counts credentials of donor.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.credentials.count = function() {
          var TargetResource = $injector.get("UserCredential");
          var action = TargetResource["::count::donor::credentials"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Donor.credentials#create
         * @methodOf lbServices.Donor.credentials
         *
         * @description
         *
         * Creates a new instance in credentials of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `UserCredential` object.)
         * </em>
         */
        R.credentials.create = function() {
          var TargetResource = $injector.get("UserCredential");
          var action = TargetResource["::create::donor::credentials"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Donor.credentials#createMany
         * @methodOf lbServices.Donor.credentials
         *
         * @description
         *
         * Creates a new instance in credentials of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `UserCredential` object.)
         * </em>
         */
        R.credentials.createMany = function() {
          var TargetResource = $injector.get("UserCredential");
          var action = TargetResource["::createMany::donor::credentials"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Donor.credentials#destroyAll
         * @methodOf lbServices.Donor.credentials
         *
         * @description
         *
         * Deletes all credentials of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.credentials.destroyAll = function() {
          var TargetResource = $injector.get("UserCredential");
          var action = TargetResource["::delete::donor::credentials"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Donor.credentials#destroyById
         * @methodOf lbServices.Donor.credentials
         *
         * @description
         *
         * Delete a related item by id for credentials.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for credentials
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.credentials.destroyById = function() {
          var TargetResource = $injector.get("UserCredential");
          var action = TargetResource["::destroyById::donor::credentials"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Donor.credentials#findById
         * @methodOf lbServices.Donor.credentials
         *
         * @description
         *
         * Find a related item by id for credentials.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for credentials
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `UserCredential` object.)
         * </em>
         */
        R.credentials.findById = function() {
          var TargetResource = $injector.get("UserCredential");
          var action = TargetResource["::findById::donor::credentials"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Donor.credentials#updateById
         * @methodOf lbServices.Donor.credentials
         *
         * @description
         *
         * Update a related item by id for credentials.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for credentials
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `UserCredential` object.)
         * </em>
         */
        R.credentials.updateById = function() {
          var TargetResource = $injector.get("UserCredential");
          var action = TargetResource["::updateById::donor::credentials"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.UserCredential
 * @header lbServices.UserCredential
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `UserCredential` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "UserCredential",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/UserCredentials/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use UserCredential.user() instead.
        "prototype$__get__user": {
          url: urlBase + "/UserCredentials/:id/user",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.UserCredential#create
         * @methodOf lbServices.UserCredential
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `UserCredential` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/UserCredentials",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.UserCredential#createMany
         * @methodOf lbServices.UserCredential
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `UserCredential` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/UserCredentials",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.UserCredential#upsert
         * @methodOf lbServices.UserCredential
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `UserCredential` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/UserCredentials",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.UserCredential#exists
         * @methodOf lbServices.UserCredential
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/UserCredentials/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.UserCredential#findById
         * @methodOf lbServices.UserCredential
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `UserCredential` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/UserCredentials/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.UserCredential#find
         * @methodOf lbServices.UserCredential
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `UserCredential` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/UserCredentials",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.UserCredential#findOne
         * @methodOf lbServices.UserCredential
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `UserCredential` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/UserCredentials/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.UserCredential#updateAll
         * @methodOf lbServices.UserCredential
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "updateAll": {
          url: urlBase + "/UserCredentials/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.UserCredential#deleteById
         * @methodOf lbServices.UserCredential
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "deleteById": {
          url: urlBase + "/UserCredentials/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.UserCredential#count
         * @methodOf lbServices.UserCredential
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/UserCredentials/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.UserCredential#prototype$updateAttributes
         * @methodOf lbServices.UserCredential
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `UserCredential` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/UserCredentials/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.UserCredential#createChangeStream
         * @methodOf lbServices.UserCredential
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/UserCredentials/change-stream",
          method: "POST"
        },

        // INTERNAL. Use Donor.credentials.findById() instead.
        "::findById::donor::credentials": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/donors/:id/credentials/:fk",
          method: "GET"
        },

        // INTERNAL. Use Donor.credentials.destroyById() instead.
        "::destroyById::donor::credentials": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/donors/:id/credentials/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Donor.credentials.updateById() instead.
        "::updateById::donor::credentials": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/donors/:id/credentials/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Donor.credentials() instead.
        "::get::donor::credentials": {
          isArray: true,
          url: urlBase + "/donors/:id/credentials",
          method: "GET"
        },

        // INTERNAL. Use Donor.credentials.create() instead.
        "::create::donor::credentials": {
          url: urlBase + "/donors/:id/credentials",
          method: "POST"
        },

        // INTERNAL. Use Donor.credentials.createMany() instead.
        "::createMany::donor::credentials": {
          isArray: true,
          url: urlBase + "/donors/:id/credentials",
          method: "POST"
        },

        // INTERNAL. Use Donor.credentials.destroyAll() instead.
        "::delete::donor::credentials": {
          url: urlBase + "/donors/:id/credentials",
          method: "DELETE"
        },

        // INTERNAL. Use Donor.credentials.count() instead.
        "::count::donor::credentials": {
          url: urlBase + "/donors/:id/credentials/count",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.UserCredential#updateOrCreate
         * @methodOf lbServices.UserCredential
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `UserCredential` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.UserCredential#update
         * @methodOf lbServices.UserCredential
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.UserCredential#destroyById
         * @methodOf lbServices.UserCredential
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.UserCredential#removeById
         * @methodOf lbServices.UserCredential
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.UserCredential#modelName
    * @propertyOf lbServices.UserCredential
    * @description
    * The name of the model represented by this $resource,
    * i.e. `UserCredential`.
    */
    R.modelName = "UserCredential";


        /**
         * @ngdoc method
         * @name lbServices.UserCredential#user
         * @methodOf lbServices.UserCredential
         *
         * @description
         *
         * Fetches belongsTo relation user.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        R.user = function() {
          var TargetResource = $injector.get("User");
          var action = TargetResource["::get::UserCredential::user"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.UserIdentity
 * @header lbServices.UserIdentity
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `UserIdentity` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "UserIdentity",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/UserIdentities/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use UserIdentity.user() instead.
        "prototype$__get__user": {
          url: urlBase + "/UserIdentities/:id/user",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.UserIdentity#create
         * @methodOf lbServices.UserIdentity
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `UserIdentity` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/UserIdentities",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.UserIdentity#createMany
         * @methodOf lbServices.UserIdentity
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `UserIdentity` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/UserIdentities",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.UserIdentity#upsert
         * @methodOf lbServices.UserIdentity
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `UserIdentity` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/UserIdentities",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.UserIdentity#exists
         * @methodOf lbServices.UserIdentity
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/UserIdentities/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.UserIdentity#findById
         * @methodOf lbServices.UserIdentity
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `UserIdentity` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/UserIdentities/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.UserIdentity#find
         * @methodOf lbServices.UserIdentity
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `UserIdentity` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/UserIdentities",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.UserIdentity#findOne
         * @methodOf lbServices.UserIdentity
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `UserIdentity` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/UserIdentities/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.UserIdentity#updateAll
         * @methodOf lbServices.UserIdentity
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "updateAll": {
          url: urlBase + "/UserIdentities/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.UserIdentity#deleteById
         * @methodOf lbServices.UserIdentity
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "deleteById": {
          url: urlBase + "/UserIdentities/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.UserIdentity#count
         * @methodOf lbServices.UserIdentity
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/UserIdentities/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.UserIdentity#prototype$updateAttributes
         * @methodOf lbServices.UserIdentity
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `UserIdentity` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/UserIdentities/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.UserIdentity#createChangeStream
         * @methodOf lbServices.UserIdentity
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/UserIdentities/change-stream",
          method: "POST"
        },

        // INTERNAL. Use Donor.identities.findById() instead.
        "::findById::donor::identities": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/donors/:id/identities/:fk",
          method: "GET"
        },

        // INTERNAL. Use Donor.identities.destroyById() instead.
        "::destroyById::donor::identities": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/donors/:id/identities/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Donor.identities.updateById() instead.
        "::updateById::donor::identities": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/donors/:id/identities/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Donor.identities() instead.
        "::get::donor::identities": {
          isArray: true,
          url: urlBase + "/donors/:id/identities",
          method: "GET"
        },

        // INTERNAL. Use Donor.identities.create() instead.
        "::create::donor::identities": {
          url: urlBase + "/donors/:id/identities",
          method: "POST"
        },

        // INTERNAL. Use Donor.identities.createMany() instead.
        "::createMany::donor::identities": {
          isArray: true,
          url: urlBase + "/donors/:id/identities",
          method: "POST"
        },

        // INTERNAL. Use Donor.identities.destroyAll() instead.
        "::delete::donor::identities": {
          url: urlBase + "/donors/:id/identities",
          method: "DELETE"
        },

        // INTERNAL. Use Donor.identities.count() instead.
        "::count::donor::identities": {
          url: urlBase + "/donors/:id/identities/count",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.UserIdentity#updateOrCreate
         * @methodOf lbServices.UserIdentity
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `UserIdentity` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.UserIdentity#update
         * @methodOf lbServices.UserIdentity
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.UserIdentity#destroyById
         * @methodOf lbServices.UserIdentity
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.UserIdentity#removeById
         * @methodOf lbServices.UserIdentity
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.UserIdentity#modelName
    * @propertyOf lbServices.UserIdentity
    * @description
    * The name of the model represented by this $resource,
    * i.e. `UserIdentity`.
    */
    R.modelName = "UserIdentity";


        /**
         * @ngdoc method
         * @name lbServices.UserIdentity#user
         * @methodOf lbServices.UserIdentity
         *
         * @description
         *
         * Fetches belongsTo relation user.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        R.user = function() {
          var TargetResource = $injector.get("User");
          var action = TargetResource["::get::UserIdentity::user"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Cause
 * @header lbServices.Cause
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Cause` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Cause",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/Causes/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use Cause.donors.findById() instead.
        "prototype$__findById__donors": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Causes/:id/donors/:fk",
          method: "GET"
        },

        // INTERNAL. Use Cause.donors.destroyById() instead.
        "prototype$__destroyById__donors": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Causes/:id/donors/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Cause.donors.updateById() instead.
        "prototype$__updateById__donors": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Causes/:id/donors/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Cause.impactGoal() instead.
        "prototype$__get__impactGoal": {
          url: urlBase + "/Causes/:id/impactGoal",
          method: "GET"
        },

        // INTERNAL. Use Cause.impactGoal.create() instead.
        "prototype$__create__impactGoal": {
          url: urlBase + "/Causes/:id/impactGoal",
          method: "POST"
        },

        // INTERNAL. Use Cause.impactGoal.update() instead.
        "prototype$__update__impactGoal": {
          url: urlBase + "/Causes/:id/impactGoal",
          method: "PUT"
        },

        // INTERNAL. Use Cause.impactGoal.destroy() instead.
        "prototype$__destroy__impactGoal": {
          url: urlBase + "/Causes/:id/impactGoal",
          method: "DELETE"
        },

        // INTERNAL. Use Cause.entry.findById() instead.
        "prototype$__findById__entry": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Causes/:id/entry/:fk",
          method: "GET"
        },

        // INTERNAL. Use Cause.entry.destroyById() instead.
        "prototype$__destroyById__entry": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Causes/:id/entry/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Cause.entry.updateById() instead.
        "prototype$__updateById__entry": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Causes/:id/entry/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Cause.organization() instead.
        "prototype$__get__organization": {
          url: urlBase + "/Causes/:id/organization",
          method: "GET"
        },

        // INTERNAL. Use Cause.donations.findById() instead.
        "prototype$__findById__donations": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Causes/:id/donations/:fk",
          method: "GET"
        },

        // INTERNAL. Use Cause.donations.destroyById() instead.
        "prototype$__destroyById__donations": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Causes/:id/donations/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Cause.donations.updateById() instead.
        "prototype$__updateById__donations": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Causes/:id/donations/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Cause.donations.link() instead.
        "prototype$__link__donations": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Causes/:id/donations/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Cause.donations.unlink() instead.
        "prototype$__unlink__donations": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Causes/:id/donations/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Cause.donations.exists() instead.
        "prototype$__exists__donations": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Causes/:id/donations/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use Cause.entryTemplates() instead.
        "prototype$__get__entryTemplates": {
          url: urlBase + "/Causes/:id/entryTemplates",
          method: "GET"
        },

        // INTERNAL. Use Cause.entryTemplates.create() instead.
        "prototype$__create__entryTemplates": {
          url: urlBase + "/Causes/:id/entryTemplates",
          method: "POST"
        },

        // INTERNAL. Use Cause.entryTemplates.update() instead.
        "prototype$__update__entryTemplates": {
          url: urlBase + "/Causes/:id/entryTemplates",
          method: "PUT"
        },

        // INTERNAL. Use Cause.entryTemplates.destroy() instead.
        "prototype$__destroy__entryTemplates": {
          url: urlBase + "/Causes/:id/entryTemplates",
          method: "DELETE"
        },

        // INTERNAL. Use Cause.donors() instead.
        "prototype$__get__donors": {
          isArray: true,
          url: urlBase + "/Causes/:id/donors",
          method: "GET"
        },

        // INTERNAL. Use Cause.donors.create() instead.
        "prototype$__create__donors": {
          url: urlBase + "/Causes/:id/donors",
          method: "POST"
        },

        // INTERNAL. Use Cause.donors.destroyAll() instead.
        "prototype$__delete__donors": {
          url: urlBase + "/Causes/:id/donors",
          method: "DELETE"
        },

        // INTERNAL. Use Cause.donors.count() instead.
        "prototype$__count__donors": {
          url: urlBase + "/Causes/:id/donors/count",
          method: "GET"
        },

        // INTERNAL. Use Cause.entry() instead.
        "prototype$__get__entry": {
          isArray: true,
          url: urlBase + "/Causes/:id/entry",
          method: "GET"
        },

        // INTERNAL. Use Cause.entry.create() instead.
        "prototype$__create__entry": {
          url: urlBase + "/Causes/:id/entry",
          method: "POST"
        },

        // INTERNAL. Use Cause.entry.destroyAll() instead.
        "prototype$__delete__entry": {
          url: urlBase + "/Causes/:id/entry",
          method: "DELETE"
        },

        // INTERNAL. Use Cause.entry.count() instead.
        "prototype$__count__entry": {
          url: urlBase + "/Causes/:id/entry/count",
          method: "GET"
        },

        // INTERNAL. Use Cause.donations() instead.
        "prototype$__get__donations": {
          isArray: true,
          url: urlBase + "/Causes/:id/donations",
          method: "GET"
        },

        // INTERNAL. Use Cause.donations.create() instead.
        "prototype$__create__donations": {
          url: urlBase + "/Causes/:id/donations",
          method: "POST"
        },

        // INTERNAL. Use Cause.donations.destroyAll() instead.
        "prototype$__delete__donations": {
          url: urlBase + "/Causes/:id/donations",
          method: "DELETE"
        },

        // INTERNAL. Use Cause.donations.count() instead.
        "prototype$__count__donations": {
          url: urlBase + "/Causes/:id/donations/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Cause#create
         * @methodOf lbServices.Cause
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Cause` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/Causes",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Cause#createMany
         * @methodOf lbServices.Cause
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Cause` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/Causes",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Cause#upsert
         * @methodOf lbServices.Cause
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Cause` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/Causes",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Cause#exists
         * @methodOf lbServices.Cause
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/Causes/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Cause#findById
         * @methodOf lbServices.Cause
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Cause` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/Causes/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Cause#find
         * @methodOf lbServices.Cause
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Cause` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/Causes",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Cause#findOne
         * @methodOf lbServices.Cause
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Cause` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/Causes/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Cause#updateAll
         * @methodOf lbServices.Cause
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "updateAll": {
          url: urlBase + "/Causes/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Cause#deleteById
         * @methodOf lbServices.Cause
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "deleteById": {
          url: urlBase + "/Causes/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Cause#count
         * @methodOf lbServices.Cause
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/Causes/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Cause#prototype$updateAttributes
         * @methodOf lbServices.Cause
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Cause` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/Causes/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Cause#createChangeStream
         * @methodOf lbServices.Cause
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/Causes/change-stream",
          method: "POST"
        },

        // INTERNAL. Use Donor.causes.findById() instead.
        "::findById::donor::causes": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/donors/:id/causes/:fk",
          method: "GET"
        },

        // INTERNAL. Use Donor.causes.destroyById() instead.
        "::destroyById::donor::causes": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/donors/:id/causes/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Donor.causes.updateById() instead.
        "::updateById::donor::causes": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/donors/:id/causes/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Donor.causes.link() instead.
        "::link::donor::causes": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/donors/:id/causes/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Donor.causes.unlink() instead.
        "::unlink::donor::causes": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/donors/:id/causes/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Donor.causes.exists() instead.
        "::exists::donor::causes": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/donors/:id/causes/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use Donor.waitingForContentFrom.findById() instead.
        "::findById::donor::waitingForContentFrom": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/donors/:id/waitingForContentFrom/:fk",
          method: "GET"
        },

        // INTERNAL. Use Donor.waitingForContentFrom.destroyById() instead.
        "::destroyById::donor::waitingForContentFrom": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/donors/:id/waitingForContentFrom/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Donor.waitingForContentFrom.updateById() instead.
        "::updateById::donor::waitingForContentFrom": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/donors/:id/waitingForContentFrom/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Donor.causes() instead.
        "::get::donor::causes": {
          isArray: true,
          url: urlBase + "/donors/:id/causes",
          method: "GET"
        },

        // INTERNAL. Use Donor.causes.create() instead.
        "::create::donor::causes": {
          url: urlBase + "/donors/:id/causes",
          method: "POST"
        },

        // INTERNAL. Use Donor.causes.createMany() instead.
        "::createMany::donor::causes": {
          isArray: true,
          url: urlBase + "/donors/:id/causes",
          method: "POST"
        },

        // INTERNAL. Use Donor.causes.destroyAll() instead.
        "::delete::donor::causes": {
          url: urlBase + "/donors/:id/causes",
          method: "DELETE"
        },

        // INTERNAL. Use Donor.causes.count() instead.
        "::count::donor::causes": {
          url: urlBase + "/donors/:id/causes/count",
          method: "GET"
        },

        // INTERNAL. Use Donor.waitingForContentFrom() instead.
        "::get::donor::waitingForContentFrom": {
          isArray: true,
          url: urlBase + "/donors/:id/waitingForContentFrom",
          method: "GET"
        },

        // INTERNAL. Use Donor.waitingForContentFrom.create() instead.
        "::create::donor::waitingForContentFrom": {
          url: urlBase + "/donors/:id/waitingForContentFrom",
          method: "POST"
        },

        // INTERNAL. Use Donor.waitingForContentFrom.createMany() instead.
        "::createMany::donor::waitingForContentFrom": {
          isArray: true,
          url: urlBase + "/donors/:id/waitingForContentFrom",
          method: "POST"
        },

        // INTERNAL. Use Donor.waitingForContentFrom.destroyAll() instead.
        "::delete::donor::waitingForContentFrom": {
          url: urlBase + "/donors/:id/waitingForContentFrom",
          method: "DELETE"
        },

        // INTERNAL. Use Donor.waitingForContentFrom.count() instead.
        "::count::donor::waitingForContentFrom": {
          url: urlBase + "/donors/:id/waitingForContentFrom/count",
          method: "GET"
        },

        // INTERNAL. Use Organization.causes.findById() instead.
        "::findById::organization::causes": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/organizations/:id/causes/:fk",
          method: "GET"
        },

        // INTERNAL. Use Organization.causes.destroyById() instead.
        "::destroyById::organization::causes": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/organizations/:id/causes/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Organization.causes.updateById() instead.
        "::updateById::organization::causes": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/organizations/:id/causes/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Organization.causes() instead.
        "::get::organization::causes": {
          isArray: true,
          url: urlBase + "/organizations/:id/causes",
          method: "GET"
        },

        // INTERNAL. Use Organization.causes.create() instead.
        "::create::organization::causes": {
          url: urlBase + "/organizations/:id/causes",
          method: "POST"
        },

        // INTERNAL. Use Organization.causes.createMany() instead.
        "::createMany::organization::causes": {
          isArray: true,
          url: urlBase + "/organizations/:id/causes",
          method: "POST"
        },

        // INTERNAL. Use Organization.causes.destroyAll() instead.
        "::delete::organization::causes": {
          url: urlBase + "/organizations/:id/causes",
          method: "DELETE"
        },

        // INTERNAL. Use Organization.causes.count() instead.
        "::count::organization::causes": {
          url: urlBase + "/organizations/:id/causes/count",
          method: "GET"
        },

        // INTERNAL. Use Donation.cause() instead.
        "::get::Donation::cause": {
          url: urlBase + "/Donations/:id/cause",
          method: "GET"
        },

        // INTERNAL. Use EntryTemplate.cause() instead.
        "::get::EntryTemplate::cause": {
          url: urlBase + "/EntryTemplates/:id/cause",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Cause#updateOrCreate
         * @methodOf lbServices.Cause
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Cause` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Cause#update
         * @methodOf lbServices.Cause
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.Cause#destroyById
         * @methodOf lbServices.Cause
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Cause#removeById
         * @methodOf lbServices.Cause
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.Cause#modelName
    * @propertyOf lbServices.Cause
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Cause`.
    */
    R.modelName = "Cause";

    /**
     * @ngdoc object
     * @name lbServices.Cause.donors
     * @header lbServices.Cause.donors
     * @object
     * @description
     *
     * The object `Cause.donors` groups methods
     * manipulating `Donor` instances related to `Cause`.
     *
     * Call {@link lbServices.Cause#donors Cause.donors()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Cause#donors
         * @methodOf lbServices.Cause
         *
         * @description
         *
         * Queries donors of Cause.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Donor` object.)
         * </em>
         */
        R.donors = function() {
          var TargetResource = $injector.get("Donor");
          var action = TargetResource["::get::Cause::donors"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Cause.donors#count
         * @methodOf lbServices.Cause.donors
         *
         * @description
         *
         * Counts donors of Cause.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.donors.count = function() {
          var TargetResource = $injector.get("Donor");
          var action = TargetResource["::count::Cause::donors"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Cause.donors#create
         * @methodOf lbServices.Cause.donors
         *
         * @description
         *
         * Creates a new instance in donors of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Donor` object.)
         * </em>
         */
        R.donors.create = function() {
          var TargetResource = $injector.get("Donor");
          var action = TargetResource["::create::Cause::donors"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Cause.donors#createMany
         * @methodOf lbServices.Cause.donors
         *
         * @description
         *
         * Creates a new instance in donors of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Donor` object.)
         * </em>
         */
        R.donors.createMany = function() {
          var TargetResource = $injector.get("Donor");
          var action = TargetResource["::createMany::Cause::donors"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Cause.donors#destroyAll
         * @methodOf lbServices.Cause.donors
         *
         * @description
         *
         * Deletes all donors of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.donors.destroyAll = function() {
          var TargetResource = $injector.get("Donor");
          var action = TargetResource["::delete::Cause::donors"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Cause.donors#destroyById
         * @methodOf lbServices.Cause.donors
         *
         * @description
         *
         * Delete a related item by id for donors.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for donors
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.donors.destroyById = function() {
          var TargetResource = $injector.get("Donor");
          var action = TargetResource["::destroyById::Cause::donors"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Cause.donors#findById
         * @methodOf lbServices.Cause.donors
         *
         * @description
         *
         * Find a related item by id for donors.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for donors
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Donor` object.)
         * </em>
         */
        R.donors.findById = function() {
          var TargetResource = $injector.get("Donor");
          var action = TargetResource["::findById::Cause::donors"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Cause.donors#updateById
         * @methodOf lbServices.Cause.donors
         *
         * @description
         *
         * Update a related item by id for donors.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for donors
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Donor` object.)
         * </em>
         */
        R.donors.updateById = function() {
          var TargetResource = $injector.get("Donor");
          var action = TargetResource["::updateById::Cause::donors"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Cause.impactGoal
     * @header lbServices.Cause.impactGoal
     * @object
     * @description
     *
     * The object `Cause.impactGoal` groups methods
     * manipulating `ImpactGoal` instances related to `Cause`.
     *
     * Call {@link lbServices.Cause#impactGoal Cause.impactGoal()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Cause#impactGoal
         * @methodOf lbServices.Cause
         *
         * @description
         *
         * Fetches hasOne relation impactGoal.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ImpactGoal` object.)
         * </em>
         */
        R.impactGoal = function() {
          var TargetResource = $injector.get("ImpactGoal");
          var action = TargetResource["::get::Cause::impactGoal"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Cause.impactGoal#create
         * @methodOf lbServices.Cause.impactGoal
         *
         * @description
         *
         * Creates a new instance in impactGoal of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ImpactGoal` object.)
         * </em>
         */
        R.impactGoal.create = function() {
          var TargetResource = $injector.get("ImpactGoal");
          var action = TargetResource["::create::Cause::impactGoal"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Cause.impactGoal#createMany
         * @methodOf lbServices.Cause.impactGoal
         *
         * @description
         *
         * Creates a new instance in impactGoal of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ImpactGoal` object.)
         * </em>
         */
        R.impactGoal.createMany = function() {
          var TargetResource = $injector.get("ImpactGoal");
          var action = TargetResource["::createMany::Cause::impactGoal"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Cause.impactGoal#destroy
         * @methodOf lbServices.Cause.impactGoal
         *
         * @description
         *
         * Deletes impactGoal of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.impactGoal.destroy = function() {
          var TargetResource = $injector.get("ImpactGoal");
          var action = TargetResource["::destroy::Cause::impactGoal"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Cause.impactGoal#update
         * @methodOf lbServices.Cause.impactGoal
         *
         * @description
         *
         * Update impactGoal of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ImpactGoal` object.)
         * </em>
         */
        R.impactGoal.update = function() {
          var TargetResource = $injector.get("ImpactGoal");
          var action = TargetResource["::update::Cause::impactGoal"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Cause.entry
     * @header lbServices.Cause.entry
     * @object
     * @description
     *
     * The object `Cause.entry` groups methods
     * manipulating `Entry` instances related to `Cause`.
     *
     * Call {@link lbServices.Cause#entry Cause.entry()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Cause#entry
         * @methodOf lbServices.Cause
         *
         * @description
         *
         * Queries entry of Cause.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Entry` object.)
         * </em>
         */
        R.entry = function() {
          var TargetResource = $injector.get("Entry");
          var action = TargetResource["::get::Cause::entry"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Cause.entry#count
         * @methodOf lbServices.Cause.entry
         *
         * @description
         *
         * Counts entry of Cause.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.entry.count = function() {
          var TargetResource = $injector.get("Entry");
          var action = TargetResource["::count::Cause::entry"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Cause.entry#create
         * @methodOf lbServices.Cause.entry
         *
         * @description
         *
         * Creates a new instance in entry of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Entry` object.)
         * </em>
         */
        R.entry.create = function() {
          var TargetResource = $injector.get("Entry");
          var action = TargetResource["::create::Cause::entry"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Cause.entry#createMany
         * @methodOf lbServices.Cause.entry
         *
         * @description
         *
         * Creates a new instance in entry of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Entry` object.)
         * </em>
         */
        R.entry.createMany = function() {
          var TargetResource = $injector.get("Entry");
          var action = TargetResource["::createMany::Cause::entry"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Cause.entry#destroyAll
         * @methodOf lbServices.Cause.entry
         *
         * @description
         *
         * Deletes all entry of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.entry.destroyAll = function() {
          var TargetResource = $injector.get("Entry");
          var action = TargetResource["::delete::Cause::entry"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Cause.entry#destroyById
         * @methodOf lbServices.Cause.entry
         *
         * @description
         *
         * Delete a related item by id for entry.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for entry
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.entry.destroyById = function() {
          var TargetResource = $injector.get("Entry");
          var action = TargetResource["::destroyById::Cause::entry"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Cause.entry#findById
         * @methodOf lbServices.Cause.entry
         *
         * @description
         *
         * Find a related item by id for entry.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for entry
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Entry` object.)
         * </em>
         */
        R.entry.findById = function() {
          var TargetResource = $injector.get("Entry");
          var action = TargetResource["::findById::Cause::entry"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Cause.entry#updateById
         * @methodOf lbServices.Cause.entry
         *
         * @description
         *
         * Update a related item by id for entry.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for entry
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Entry` object.)
         * </em>
         */
        R.entry.updateById = function() {
          var TargetResource = $injector.get("Entry");
          var action = TargetResource["::updateById::Cause::entry"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Cause#organization
         * @methodOf lbServices.Cause
         *
         * @description
         *
         * Fetches belongsTo relation organization.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Organization` object.)
         * </em>
         */
        R.organization = function() {
          var TargetResource = $injector.get("Organization");
          var action = TargetResource["::get::Cause::organization"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Cause.donations
     * @header lbServices.Cause.donations
     * @object
     * @description
     *
     * The object `Cause.donations` groups methods
     * manipulating `Donation` instances related to `Cause`.
     *
     * Call {@link lbServices.Cause#donations Cause.donations()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Cause#donations
         * @methodOf lbServices.Cause
         *
         * @description
         *
         * Queries donations of Cause.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Donation` object.)
         * </em>
         */
        R.donations = function() {
          var TargetResource = $injector.get("Donation");
          var action = TargetResource["::get::Cause::donations"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Cause.donations#count
         * @methodOf lbServices.Cause.donations
         *
         * @description
         *
         * Counts donations of Cause.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.donations.count = function() {
          var TargetResource = $injector.get("Donation");
          var action = TargetResource["::count::Cause::donations"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Cause.donations#create
         * @methodOf lbServices.Cause.donations
         *
         * @description
         *
         * Creates a new instance in donations of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Donation` object.)
         * </em>
         */
        R.donations.create = function() {
          var TargetResource = $injector.get("Donation");
          var action = TargetResource["::create::Cause::donations"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Cause.donations#createMany
         * @methodOf lbServices.Cause.donations
         *
         * @description
         *
         * Creates a new instance in donations of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Donation` object.)
         * </em>
         */
        R.donations.createMany = function() {
          var TargetResource = $injector.get("Donation");
          var action = TargetResource["::createMany::Cause::donations"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Cause.donations#destroyAll
         * @methodOf lbServices.Cause.donations
         *
         * @description
         *
         * Deletes all donations of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.donations.destroyAll = function() {
          var TargetResource = $injector.get("Donation");
          var action = TargetResource["::delete::Cause::donations"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Cause.donations#destroyById
         * @methodOf lbServices.Cause.donations
         *
         * @description
         *
         * Delete a related item by id for donations.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for donations
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.donations.destroyById = function() {
          var TargetResource = $injector.get("Donation");
          var action = TargetResource["::destroyById::Cause::donations"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Cause.donations#exists
         * @methodOf lbServices.Cause.donations
         *
         * @description
         *
         * Check the existence of donations relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for donations
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Donation` object.)
         * </em>
         */
        R.donations.exists = function() {
          var TargetResource = $injector.get("Donation");
          var action = TargetResource["::exists::Cause::donations"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Cause.donations#findById
         * @methodOf lbServices.Cause.donations
         *
         * @description
         *
         * Find a related item by id for donations.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for donations
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Donation` object.)
         * </em>
         */
        R.donations.findById = function() {
          var TargetResource = $injector.get("Donation");
          var action = TargetResource["::findById::Cause::donations"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Cause.donations#link
         * @methodOf lbServices.Cause.donations
         *
         * @description
         *
         * Add a related item by id for donations.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for donations
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Donation` object.)
         * </em>
         */
        R.donations.link = function() {
          var TargetResource = $injector.get("Donation");
          var action = TargetResource["::link::Cause::donations"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Cause.donations#unlink
         * @methodOf lbServices.Cause.donations
         *
         * @description
         *
         * Remove the donations relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for donations
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.donations.unlink = function() {
          var TargetResource = $injector.get("Donation");
          var action = TargetResource["::unlink::Cause::donations"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Cause.donations#updateById
         * @methodOf lbServices.Cause.donations
         *
         * @description
         *
         * Update a related item by id for donations.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for donations
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Donation` object.)
         * </em>
         */
        R.donations.updateById = function() {
          var TargetResource = $injector.get("Donation");
          var action = TargetResource["::updateById::Cause::donations"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Cause.entryTemplates
     * @header lbServices.Cause.entryTemplates
     * @object
     * @description
     *
     * The object `Cause.entryTemplates` groups methods
     * manipulating `EntryTemplate` instances related to `Cause`.
     *
     * Call {@link lbServices.Cause#entryTemplates Cause.entryTemplates()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Cause#entryTemplates
         * @methodOf lbServices.Cause
         *
         * @description
         *
         * Fetches hasOne relation entryTemplates.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `EntryTemplate` object.)
         * </em>
         */
        R.entryTemplates = function() {
          var TargetResource = $injector.get("EntryTemplate");
          var action = TargetResource["::get::Cause::entryTemplates"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Cause.entryTemplates#create
         * @methodOf lbServices.Cause.entryTemplates
         *
         * @description
         *
         * Creates a new instance in entryTemplates of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `EntryTemplate` object.)
         * </em>
         */
        R.entryTemplates.create = function() {
          var TargetResource = $injector.get("EntryTemplate");
          var action = TargetResource["::create::Cause::entryTemplates"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Cause.entryTemplates#createMany
         * @methodOf lbServices.Cause.entryTemplates
         *
         * @description
         *
         * Creates a new instance in entryTemplates of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `EntryTemplate` object.)
         * </em>
         */
        R.entryTemplates.createMany = function() {
          var TargetResource = $injector.get("EntryTemplate");
          var action = TargetResource["::createMany::Cause::entryTemplates"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Cause.entryTemplates#destroy
         * @methodOf lbServices.Cause.entryTemplates
         *
         * @description
         *
         * Deletes entryTemplates of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.entryTemplates.destroy = function() {
          var TargetResource = $injector.get("EntryTemplate");
          var action = TargetResource["::destroy::Cause::entryTemplates"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Cause.entryTemplates#update
         * @methodOf lbServices.Cause.entryTemplates
         *
         * @description
         *
         * Update entryTemplates of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `EntryTemplate` object.)
         * </em>
         */
        R.entryTemplates.update = function() {
          var TargetResource = $injector.get("EntryTemplate");
          var action = TargetResource["::update::Cause::entryTemplates"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.ImpactGoal
 * @header lbServices.ImpactGoal
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `ImpactGoal` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "ImpactGoal",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/impactGoals/:id",
      { 'id': '@id' },
      {

        /**
         * @ngdoc method
         * @name lbServices.ImpactGoal#create
         * @methodOf lbServices.ImpactGoal
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ImpactGoal` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/impactGoals",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.ImpactGoal#createMany
         * @methodOf lbServices.ImpactGoal
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ImpactGoal` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/impactGoals",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.ImpactGoal#upsert
         * @methodOf lbServices.ImpactGoal
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ImpactGoal` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/impactGoals",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.ImpactGoal#exists
         * @methodOf lbServices.ImpactGoal
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/impactGoals/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.ImpactGoal#findById
         * @methodOf lbServices.ImpactGoal
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ImpactGoal` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/impactGoals/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.ImpactGoal#find
         * @methodOf lbServices.ImpactGoal
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ImpactGoal` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/impactGoals",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.ImpactGoal#findOne
         * @methodOf lbServices.ImpactGoal
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ImpactGoal` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/impactGoals/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.ImpactGoal#updateAll
         * @methodOf lbServices.ImpactGoal
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "updateAll": {
          url: urlBase + "/impactGoals/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.ImpactGoal#deleteById
         * @methodOf lbServices.ImpactGoal
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "deleteById": {
          url: urlBase + "/impactGoals/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.ImpactGoal#count
         * @methodOf lbServices.ImpactGoal
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/impactGoals/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.ImpactGoal#prototype$updateAttributes
         * @methodOf lbServices.ImpactGoal
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ImpactGoal` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/impactGoals/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.ImpactGoal#createChangeStream
         * @methodOf lbServices.ImpactGoal
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/impactGoals/change-stream",
          method: "POST"
        },

        // INTERNAL. Use Cause.impactGoal() instead.
        "::get::Cause::impactGoal": {
          url: urlBase + "/Causes/:id/impactGoal",
          method: "GET"
        },

        // INTERNAL. Use Cause.impactGoal.create() instead.
        "::create::Cause::impactGoal": {
          url: urlBase + "/Causes/:id/impactGoal",
          method: "POST"
        },

        // INTERNAL. Use Cause.impactGoal.createMany() instead.
        "::createMany::Cause::impactGoal": {
          isArray: true,
          url: urlBase + "/Causes/:id/impactGoal",
          method: "POST"
        },

        // INTERNAL. Use Cause.impactGoal.update() instead.
        "::update::Cause::impactGoal": {
          url: urlBase + "/Causes/:id/impactGoal",
          method: "PUT"
        },

        // INTERNAL. Use Cause.impactGoal.destroy() instead.
        "::destroy::Cause::impactGoal": {
          url: urlBase + "/Causes/:id/impactGoal",
          method: "DELETE"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.ImpactGoal#updateOrCreate
         * @methodOf lbServices.ImpactGoal
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ImpactGoal` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.ImpactGoal#update
         * @methodOf lbServices.ImpactGoal
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.ImpactGoal#destroyById
         * @methodOf lbServices.ImpactGoal
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.ImpactGoal#removeById
         * @methodOf lbServices.ImpactGoal
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.ImpactGoal#modelName
    * @propertyOf lbServices.ImpactGoal
    * @description
    * The name of the model represented by this $resource,
    * i.e. `ImpactGoal`.
    */
    R.modelName = "ImpactGoal";


    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Entry
 * @header lbServices.Entry
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Entry` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Entry",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/entries/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use Entry.donor() instead.
        "prototype$__get__donor": {
          url: urlBase + "/entries/:id/donor",
          method: "GET"
        },

        // INTERNAL. Use Entry.customFields.findById() instead.
        "prototype$__findById__customFields": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/entries/:id/customFields/:fk",
          method: "GET"
        },

        // INTERNAL. Use Entry.customFields.destroyById() instead.
        "prototype$__destroyById__customFields": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/entries/:id/customFields/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Entry.customFields.updateById() instead.
        "prototype$__updateById__customFields": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/entries/:id/customFields/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Entry.customFields() instead.
        "prototype$__get__customFields": {
          isArray: true,
          url: urlBase + "/entries/:id/customFields",
          method: "GET"
        },

        // INTERNAL. Use Entry.customFields.create() instead.
        "prototype$__create__customFields": {
          url: urlBase + "/entries/:id/customFields",
          method: "POST"
        },

        // INTERNAL. Use Entry.customFields.destroyAll() instead.
        "prototype$__delete__customFields": {
          url: urlBase + "/entries/:id/customFields",
          method: "DELETE"
        },

        // INTERNAL. Use Entry.customFields.count() instead.
        "prototype$__count__customFields": {
          url: urlBase + "/entries/:id/customFields/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Entry#create
         * @methodOf lbServices.Entry
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Entry` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/entries",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Entry#createMany
         * @methodOf lbServices.Entry
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Entry` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/entries",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Entry#upsert
         * @methodOf lbServices.Entry
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Entry` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/entries",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Entry#exists
         * @methodOf lbServices.Entry
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/entries/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Entry#findById
         * @methodOf lbServices.Entry
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Entry` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/entries/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Entry#find
         * @methodOf lbServices.Entry
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Entry` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/entries",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Entry#findOne
         * @methodOf lbServices.Entry
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Entry` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/entries/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Entry#updateAll
         * @methodOf lbServices.Entry
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "updateAll": {
          url: urlBase + "/entries/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Entry#deleteById
         * @methodOf lbServices.Entry
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "deleteById": {
          url: urlBase + "/entries/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Entry#count
         * @methodOf lbServices.Entry
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/entries/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Entry#prototype$updateAttributes
         * @methodOf lbServices.Entry
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Entry` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/entries/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Entry#createChangeStream
         * @methodOf lbServices.Entry
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/entries/change-stream",
          method: "POST"
        },

        // INTERNAL. Use Donor.entries.findById() instead.
        "::findById::donor::entries": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/donors/:id/entries/:fk",
          method: "GET"
        },

        // INTERNAL. Use Donor.entries.destroyById() instead.
        "::destroyById::donor::entries": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/donors/:id/entries/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Donor.entries.updateById() instead.
        "::updateById::donor::entries": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/donors/:id/entries/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Donor.entries() instead.
        "::get::donor::entries": {
          isArray: true,
          url: urlBase + "/donors/:id/entries",
          method: "GET"
        },

        // INTERNAL. Use Donor.entries.create() instead.
        "::create::donor::entries": {
          url: urlBase + "/donors/:id/entries",
          method: "POST"
        },

        // INTERNAL. Use Donor.entries.createMany() instead.
        "::createMany::donor::entries": {
          isArray: true,
          url: urlBase + "/donors/:id/entries",
          method: "POST"
        },

        // INTERNAL. Use Donor.entries.destroyAll() instead.
        "::delete::donor::entries": {
          url: urlBase + "/donors/:id/entries",
          method: "DELETE"
        },

        // INTERNAL. Use Donor.entries.count() instead.
        "::count::donor::entries": {
          url: urlBase + "/donors/:id/entries/count",
          method: "GET"
        },

        // INTERNAL. Use Cause.entry.findById() instead.
        "::findById::Cause::entry": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Causes/:id/entry/:fk",
          method: "GET"
        },

        // INTERNAL. Use Cause.entry.destroyById() instead.
        "::destroyById::Cause::entry": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Causes/:id/entry/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Cause.entry.updateById() instead.
        "::updateById::Cause::entry": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Causes/:id/entry/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Cause.entry() instead.
        "::get::Cause::entry": {
          isArray: true,
          url: urlBase + "/Causes/:id/entry",
          method: "GET"
        },

        // INTERNAL. Use Cause.entry.create() instead.
        "::create::Cause::entry": {
          url: urlBase + "/Causes/:id/entry",
          method: "POST"
        },

        // INTERNAL. Use Cause.entry.createMany() instead.
        "::createMany::Cause::entry": {
          isArray: true,
          url: urlBase + "/Causes/:id/entry",
          method: "POST"
        },

        // INTERNAL. Use Cause.entry.destroyAll() instead.
        "::delete::Cause::entry": {
          url: urlBase + "/Causes/:id/entry",
          method: "DELETE"
        },

        // INTERNAL. Use Cause.entry.count() instead.
        "::count::Cause::entry": {
          url: urlBase + "/Causes/:id/entry/count",
          method: "GET"
        },

        // INTERNAL. Use Organization.entries.findById() instead.
        "::findById::organization::entries": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/organizations/:id/entries/:fk",
          method: "GET"
        },

        // INTERNAL. Use Organization.entries.destroyById() instead.
        "::destroyById::organization::entries": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/organizations/:id/entries/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Organization.entries.updateById() instead.
        "::updateById::organization::entries": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/organizations/:id/entries/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Organization.entries.link() instead.
        "::link::organization::entries": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/organizations/:id/entries/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Organization.entries.unlink() instead.
        "::unlink::organization::entries": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/organizations/:id/entries/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Organization.entries.exists() instead.
        "::exists::organization::entries": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/organizations/:id/entries/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use Organization.entries() instead.
        "::get::organization::entries": {
          isArray: true,
          url: urlBase + "/organizations/:id/entries",
          method: "GET"
        },

        // INTERNAL. Use Organization.entries.create() instead.
        "::create::organization::entries": {
          url: urlBase + "/organizations/:id/entries",
          method: "POST"
        },

        // INTERNAL. Use Organization.entries.createMany() instead.
        "::createMany::organization::entries": {
          isArray: true,
          url: urlBase + "/organizations/:id/entries",
          method: "POST"
        },

        // INTERNAL. Use Organization.entries.destroyAll() instead.
        "::delete::organization::entries": {
          url: urlBase + "/organizations/:id/entries",
          method: "DELETE"
        },

        // INTERNAL. Use Organization.entries.count() instead.
        "::count::organization::entries": {
          url: urlBase + "/organizations/:id/entries/count",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Entry#updateOrCreate
         * @methodOf lbServices.Entry
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Entry` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Entry#update
         * @methodOf lbServices.Entry
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.Entry#destroyById
         * @methodOf lbServices.Entry
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Entry#removeById
         * @methodOf lbServices.Entry
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.Entry#modelName
    * @propertyOf lbServices.Entry
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Entry`.
    */
    R.modelName = "Entry";


        /**
         * @ngdoc method
         * @name lbServices.Entry#donor
         * @methodOf lbServices.Entry
         *
         * @description
         *
         * Fetches belongsTo relation donor.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Donor` object.)
         * </em>
         */
        R.donor = function() {
          var TargetResource = $injector.get("Donor");
          var action = TargetResource["::get::entry::donor"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Entry.customFields
     * @header lbServices.Entry.customFields
     * @object
     * @description
     *
     * The object `Entry.customFields` groups methods
     * manipulating `CustomField` instances related to `Entry`.
     *
     * Call {@link lbServices.Entry#customFields Entry.customFields()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Entry#customFields
         * @methodOf lbServices.Entry
         *
         * @description
         *
         * Queries customFields of entry.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CustomField` object.)
         * </em>
         */
        R.customFields = function() {
          var TargetResource = $injector.get("CustomField");
          var action = TargetResource["::get::entry::customFields"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Entry.customFields#count
         * @methodOf lbServices.Entry.customFields
         *
         * @description
         *
         * Counts customFields of entry.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.customFields.count = function() {
          var TargetResource = $injector.get("CustomField");
          var action = TargetResource["::count::entry::customFields"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Entry.customFields#create
         * @methodOf lbServices.Entry.customFields
         *
         * @description
         *
         * Creates a new instance in customFields of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CustomField` object.)
         * </em>
         */
        R.customFields.create = function() {
          var TargetResource = $injector.get("CustomField");
          var action = TargetResource["::create::entry::customFields"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Entry.customFields#createMany
         * @methodOf lbServices.Entry.customFields
         *
         * @description
         *
         * Creates a new instance in customFields of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CustomField` object.)
         * </em>
         */
        R.customFields.createMany = function() {
          var TargetResource = $injector.get("CustomField");
          var action = TargetResource["::createMany::entry::customFields"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Entry.customFields#destroyAll
         * @methodOf lbServices.Entry.customFields
         *
         * @description
         *
         * Deletes all customFields of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.customFields.destroyAll = function() {
          var TargetResource = $injector.get("CustomField");
          var action = TargetResource["::delete::entry::customFields"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Entry.customFields#destroyById
         * @methodOf lbServices.Entry.customFields
         *
         * @description
         *
         * Delete a related item by id for customFields.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for customFields
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.customFields.destroyById = function() {
          var TargetResource = $injector.get("CustomField");
          var action = TargetResource["::destroyById::entry::customFields"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Entry.customFields#findById
         * @methodOf lbServices.Entry.customFields
         *
         * @description
         *
         * Find a related item by id for customFields.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for customFields
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CustomField` object.)
         * </em>
         */
        R.customFields.findById = function() {
          var TargetResource = $injector.get("CustomField");
          var action = TargetResource["::findById::entry::customFields"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Entry.customFields#updateById
         * @methodOf lbServices.Entry.customFields
         *
         * @description
         *
         * Update a related item by id for customFields.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for customFields
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CustomField` object.)
         * </em>
         */
        R.customFields.updateById = function() {
          var TargetResource = $injector.get("CustomField");
          var action = TargetResource["::updateById::entry::customFields"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.CustomField
 * @header lbServices.CustomField
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `CustomField` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "CustomField",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/customFields/:id",
      { 'id': '@id' },
      {

        /**
         * @ngdoc method
         * @name lbServices.CustomField#create
         * @methodOf lbServices.CustomField
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CustomField` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/customFields",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.CustomField#createMany
         * @methodOf lbServices.CustomField
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CustomField` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/customFields",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.CustomField#upsert
         * @methodOf lbServices.CustomField
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CustomField` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/customFields",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.CustomField#exists
         * @methodOf lbServices.CustomField
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/customFields/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.CustomField#findById
         * @methodOf lbServices.CustomField
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CustomField` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/customFields/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.CustomField#find
         * @methodOf lbServices.CustomField
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CustomField` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/customFields",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.CustomField#findOne
         * @methodOf lbServices.CustomField
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CustomField` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/customFields/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.CustomField#updateAll
         * @methodOf lbServices.CustomField
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "updateAll": {
          url: urlBase + "/customFields/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.CustomField#deleteById
         * @methodOf lbServices.CustomField
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "deleteById": {
          url: urlBase + "/customFields/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.CustomField#count
         * @methodOf lbServices.CustomField
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/customFields/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.CustomField#prototype$updateAttributes
         * @methodOf lbServices.CustomField
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CustomField` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/customFields/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.CustomField#createChangeStream
         * @methodOf lbServices.CustomField
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/customFields/change-stream",
          method: "POST"
        },

        // INTERNAL. Use Entry.customFields.findById() instead.
        "::findById::entry::customFields": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/entries/:id/customFields/:fk",
          method: "GET"
        },

        // INTERNAL. Use Entry.customFields.destroyById() instead.
        "::destroyById::entry::customFields": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/entries/:id/customFields/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Entry.customFields.updateById() instead.
        "::updateById::entry::customFields": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/entries/:id/customFields/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Entry.customFields() instead.
        "::get::entry::customFields": {
          isArray: true,
          url: urlBase + "/entries/:id/customFields",
          method: "GET"
        },

        // INTERNAL. Use Entry.customFields.create() instead.
        "::create::entry::customFields": {
          url: urlBase + "/entries/:id/customFields",
          method: "POST"
        },

        // INTERNAL. Use Entry.customFields.createMany() instead.
        "::createMany::entry::customFields": {
          isArray: true,
          url: urlBase + "/entries/:id/customFields",
          method: "POST"
        },

        // INTERNAL. Use Entry.customFields.destroyAll() instead.
        "::delete::entry::customFields": {
          url: urlBase + "/entries/:id/customFields",
          method: "DELETE"
        },

        // INTERNAL. Use Entry.customFields.count() instead.
        "::count::entry::customFields": {
          url: urlBase + "/entries/:id/customFields/count",
          method: "GET"
        },

        // INTERNAL. Use EntryTemplate.customFields.findById() instead.
        "::findById::EntryTemplate::customFields": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/EntryTemplates/:id/customFields/:fk",
          method: "GET"
        },

        // INTERNAL. Use EntryTemplate.customFields.destroyById() instead.
        "::destroyById::EntryTemplate::customFields": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/EntryTemplates/:id/customFields/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use EntryTemplate.customFields.updateById() instead.
        "::updateById::EntryTemplate::customFields": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/EntryTemplates/:id/customFields/:fk",
          method: "PUT"
        },

        // INTERNAL. Use EntryTemplate.customFields() instead.
        "::get::EntryTemplate::customFields": {
          isArray: true,
          url: urlBase + "/EntryTemplates/:id/customFields",
          method: "GET"
        },

        // INTERNAL. Use EntryTemplate.customFields.create() instead.
        "::create::EntryTemplate::customFields": {
          url: urlBase + "/EntryTemplates/:id/customFields",
          method: "POST"
        },

        // INTERNAL. Use EntryTemplate.customFields.createMany() instead.
        "::createMany::EntryTemplate::customFields": {
          isArray: true,
          url: urlBase + "/EntryTemplates/:id/customFields",
          method: "POST"
        },

        // INTERNAL. Use EntryTemplate.customFields.destroyAll() instead.
        "::delete::EntryTemplate::customFields": {
          url: urlBase + "/EntryTemplates/:id/customFields",
          method: "DELETE"
        },

        // INTERNAL. Use EntryTemplate.customFields.count() instead.
        "::count::EntryTemplate::customFields": {
          url: urlBase + "/EntryTemplates/:id/customFields/count",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.CustomField#updateOrCreate
         * @methodOf lbServices.CustomField
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CustomField` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.CustomField#update
         * @methodOf lbServices.CustomField
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.CustomField#destroyById
         * @methodOf lbServices.CustomField
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.CustomField#removeById
         * @methodOf lbServices.CustomField
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.CustomField#modelName
    * @propertyOf lbServices.CustomField
    * @description
    * The name of the model represented by this $resource,
    * i.e. `CustomField`.
    */
    R.modelName = "CustomField";


    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Organization
 * @header lbServices.Organization
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Organization` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Organization",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/organizations/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use Organization.entries.findById() instead.
        "prototype$__findById__entries": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/organizations/:id/entries/:fk",
          method: "GET"
        },

        // INTERNAL. Use Organization.entries.destroyById() instead.
        "prototype$__destroyById__entries": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/organizations/:id/entries/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Organization.entries.updateById() instead.
        "prototype$__updateById__entries": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/organizations/:id/entries/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Organization.entries.link() instead.
        "prototype$__link__entries": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/organizations/:id/entries/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Organization.entries.unlink() instead.
        "prototype$__unlink__entries": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/organizations/:id/entries/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Organization.entries.exists() instead.
        "prototype$__exists__entries": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/organizations/:id/entries/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use Organization.causes.findById() instead.
        "prototype$__findById__causes": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/organizations/:id/causes/:fk",
          method: "GET"
        },

        // INTERNAL. Use Organization.causes.destroyById() instead.
        "prototype$__destroyById__causes": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/organizations/:id/causes/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Organization.causes.updateById() instead.
        "prototype$__updateById__causes": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/organizations/:id/causes/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Organization.admins.findById() instead.
        "prototype$__findById__admins": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/organizations/:id/admins/:fk",
          method: "GET"
        },

        // INTERNAL. Use Organization.admins.destroyById() instead.
        "prototype$__destroyById__admins": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/organizations/:id/admins/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Organization.admins.updateById() instead.
        "prototype$__updateById__admins": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/organizations/:id/admins/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Organization.entries() instead.
        "prototype$__get__entries": {
          isArray: true,
          url: urlBase + "/organizations/:id/entries",
          method: "GET"
        },

        // INTERNAL. Use Organization.entries.create() instead.
        "prototype$__create__entries": {
          url: urlBase + "/organizations/:id/entries",
          method: "POST"
        },

        // INTERNAL. Use Organization.entries.destroyAll() instead.
        "prototype$__delete__entries": {
          url: urlBase + "/organizations/:id/entries",
          method: "DELETE"
        },

        // INTERNAL. Use Organization.entries.count() instead.
        "prototype$__count__entries": {
          url: urlBase + "/organizations/:id/entries/count",
          method: "GET"
        },

        // INTERNAL. Use Organization.causes() instead.
        "prototype$__get__causes": {
          isArray: true,
          url: urlBase + "/organizations/:id/causes",
          method: "GET"
        },

        // INTERNAL. Use Organization.causes.create() instead.
        "prototype$__create__causes": {
          url: urlBase + "/organizations/:id/causes",
          method: "POST"
        },

        // INTERNAL. Use Organization.causes.destroyAll() instead.
        "prototype$__delete__causes": {
          url: urlBase + "/organizations/:id/causes",
          method: "DELETE"
        },

        // INTERNAL. Use Organization.causes.count() instead.
        "prototype$__count__causes": {
          url: urlBase + "/organizations/:id/causes/count",
          method: "GET"
        },

        // INTERNAL. Use Organization.admins() instead.
        "prototype$__get__admins": {
          isArray: true,
          url: urlBase + "/organizations/:id/admins",
          method: "GET"
        },

        // INTERNAL. Use Organization.admins.create() instead.
        "prototype$__create__admins": {
          url: urlBase + "/organizations/:id/admins",
          method: "POST"
        },

        // INTERNAL. Use Organization.admins.destroyAll() instead.
        "prototype$__delete__admins": {
          url: urlBase + "/organizations/:id/admins",
          method: "DELETE"
        },

        // INTERNAL. Use Organization.admins.count() instead.
        "prototype$__count__admins": {
          url: urlBase + "/organizations/:id/admins/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Organization#create
         * @methodOf lbServices.Organization
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Organization` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/organizations",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Organization#createMany
         * @methodOf lbServices.Organization
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Organization` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/organizations",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Organization#upsert
         * @methodOf lbServices.Organization
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Organization` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/organizations",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Organization#exists
         * @methodOf lbServices.Organization
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/organizations/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Organization#findById
         * @methodOf lbServices.Organization
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Organization` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/organizations/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Organization#find
         * @methodOf lbServices.Organization
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Organization` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/organizations",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Organization#findOne
         * @methodOf lbServices.Organization
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Organization` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/organizations/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Organization#updateAll
         * @methodOf lbServices.Organization
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "updateAll": {
          url: urlBase + "/organizations/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Organization#deleteById
         * @methodOf lbServices.Organization
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "deleteById": {
          url: urlBase + "/organizations/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Organization#count
         * @methodOf lbServices.Organization
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/organizations/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Organization#prototype$updateAttributes
         * @methodOf lbServices.Organization
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Organization` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/organizations/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Organization#createChangeStream
         * @methodOf lbServices.Organization
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/organizations/change-stream",
          method: "POST"
        },

        // INTERNAL. Use Cause.organization() instead.
        "::get::Cause::organization": {
          url: urlBase + "/Causes/:id/organization",
          method: "GET"
        },

        // INTERNAL. Use Admin.organization() instead.
        "::get::admin::organization": {
          url: urlBase + "/admins/:id/organization",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Organization#updateOrCreate
         * @methodOf lbServices.Organization
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Organization` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Organization#update
         * @methodOf lbServices.Organization
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.Organization#destroyById
         * @methodOf lbServices.Organization
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Organization#removeById
         * @methodOf lbServices.Organization
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.Organization#modelName
    * @propertyOf lbServices.Organization
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Organization`.
    */
    R.modelName = "Organization";

    /**
     * @ngdoc object
     * @name lbServices.Organization.entries
     * @header lbServices.Organization.entries
     * @object
     * @description
     *
     * The object `Organization.entries` groups methods
     * manipulating `Entry` instances related to `Organization`.
     *
     * Call {@link lbServices.Organization#entries Organization.entries()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Organization#entries
         * @methodOf lbServices.Organization
         *
         * @description
         *
         * Queries entries of organization.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Entry` object.)
         * </em>
         */
        R.entries = function() {
          var TargetResource = $injector.get("Entry");
          var action = TargetResource["::get::organization::entries"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Organization.entries#count
         * @methodOf lbServices.Organization.entries
         *
         * @description
         *
         * Counts entries of organization.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.entries.count = function() {
          var TargetResource = $injector.get("Entry");
          var action = TargetResource["::count::organization::entries"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Organization.entries#create
         * @methodOf lbServices.Organization.entries
         *
         * @description
         *
         * Creates a new instance in entries of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Entry` object.)
         * </em>
         */
        R.entries.create = function() {
          var TargetResource = $injector.get("Entry");
          var action = TargetResource["::create::organization::entries"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Organization.entries#createMany
         * @methodOf lbServices.Organization.entries
         *
         * @description
         *
         * Creates a new instance in entries of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Entry` object.)
         * </em>
         */
        R.entries.createMany = function() {
          var TargetResource = $injector.get("Entry");
          var action = TargetResource["::createMany::organization::entries"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Organization.entries#destroyAll
         * @methodOf lbServices.Organization.entries
         *
         * @description
         *
         * Deletes all entries of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.entries.destroyAll = function() {
          var TargetResource = $injector.get("Entry");
          var action = TargetResource["::delete::organization::entries"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Organization.entries#destroyById
         * @methodOf lbServices.Organization.entries
         *
         * @description
         *
         * Delete a related item by id for entries.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for entries
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.entries.destroyById = function() {
          var TargetResource = $injector.get("Entry");
          var action = TargetResource["::destroyById::organization::entries"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Organization.entries#exists
         * @methodOf lbServices.Organization.entries
         *
         * @description
         *
         * Check the existence of entries relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for entries
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Entry` object.)
         * </em>
         */
        R.entries.exists = function() {
          var TargetResource = $injector.get("Entry");
          var action = TargetResource["::exists::organization::entries"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Organization.entries#findById
         * @methodOf lbServices.Organization.entries
         *
         * @description
         *
         * Find a related item by id for entries.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for entries
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Entry` object.)
         * </em>
         */
        R.entries.findById = function() {
          var TargetResource = $injector.get("Entry");
          var action = TargetResource["::findById::organization::entries"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Organization.entries#link
         * @methodOf lbServices.Organization.entries
         *
         * @description
         *
         * Add a related item by id for entries.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for entries
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Entry` object.)
         * </em>
         */
        R.entries.link = function() {
          var TargetResource = $injector.get("Entry");
          var action = TargetResource["::link::organization::entries"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Organization.entries#unlink
         * @methodOf lbServices.Organization.entries
         *
         * @description
         *
         * Remove the entries relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for entries
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.entries.unlink = function() {
          var TargetResource = $injector.get("Entry");
          var action = TargetResource["::unlink::organization::entries"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Organization.entries#updateById
         * @methodOf lbServices.Organization.entries
         *
         * @description
         *
         * Update a related item by id for entries.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for entries
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Entry` object.)
         * </em>
         */
        R.entries.updateById = function() {
          var TargetResource = $injector.get("Entry");
          var action = TargetResource["::updateById::organization::entries"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Organization.causes
     * @header lbServices.Organization.causes
     * @object
     * @description
     *
     * The object `Organization.causes` groups methods
     * manipulating `Cause` instances related to `Organization`.
     *
     * Call {@link lbServices.Organization#causes Organization.causes()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Organization#causes
         * @methodOf lbServices.Organization
         *
         * @description
         *
         * Queries causes of organization.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Cause` object.)
         * </em>
         */
        R.causes = function() {
          var TargetResource = $injector.get("Cause");
          var action = TargetResource["::get::organization::causes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Organization.causes#count
         * @methodOf lbServices.Organization.causes
         *
         * @description
         *
         * Counts causes of organization.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.causes.count = function() {
          var TargetResource = $injector.get("Cause");
          var action = TargetResource["::count::organization::causes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Organization.causes#create
         * @methodOf lbServices.Organization.causes
         *
         * @description
         *
         * Creates a new instance in causes of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Cause` object.)
         * </em>
         */
        R.causes.create = function() {
          var TargetResource = $injector.get("Cause");
          var action = TargetResource["::create::organization::causes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Organization.causes#createMany
         * @methodOf lbServices.Organization.causes
         *
         * @description
         *
         * Creates a new instance in causes of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Cause` object.)
         * </em>
         */
        R.causes.createMany = function() {
          var TargetResource = $injector.get("Cause");
          var action = TargetResource["::createMany::organization::causes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Organization.causes#destroyAll
         * @methodOf lbServices.Organization.causes
         *
         * @description
         *
         * Deletes all causes of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.causes.destroyAll = function() {
          var TargetResource = $injector.get("Cause");
          var action = TargetResource["::delete::organization::causes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Organization.causes#destroyById
         * @methodOf lbServices.Organization.causes
         *
         * @description
         *
         * Delete a related item by id for causes.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for causes
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.causes.destroyById = function() {
          var TargetResource = $injector.get("Cause");
          var action = TargetResource["::destroyById::organization::causes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Organization.causes#findById
         * @methodOf lbServices.Organization.causes
         *
         * @description
         *
         * Find a related item by id for causes.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for causes
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Cause` object.)
         * </em>
         */
        R.causes.findById = function() {
          var TargetResource = $injector.get("Cause");
          var action = TargetResource["::findById::organization::causes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Organization.causes#updateById
         * @methodOf lbServices.Organization.causes
         *
         * @description
         *
         * Update a related item by id for causes.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for causes
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Cause` object.)
         * </em>
         */
        R.causes.updateById = function() {
          var TargetResource = $injector.get("Cause");
          var action = TargetResource["::updateById::organization::causes"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Organization.admins
     * @header lbServices.Organization.admins
     * @object
     * @description
     *
     * The object `Organization.admins` groups methods
     * manipulating `Admin` instances related to `Organization`.
     *
     * Call {@link lbServices.Organization#admins Organization.admins()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Organization#admins
         * @methodOf lbServices.Organization
         *
         * @description
         *
         * Queries admins of organization.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Admin` object.)
         * </em>
         */
        R.admins = function() {
          var TargetResource = $injector.get("Admin");
          var action = TargetResource["::get::organization::admins"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Organization.admins#count
         * @methodOf lbServices.Organization.admins
         *
         * @description
         *
         * Counts admins of organization.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.admins.count = function() {
          var TargetResource = $injector.get("Admin");
          var action = TargetResource["::count::organization::admins"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Organization.admins#create
         * @methodOf lbServices.Organization.admins
         *
         * @description
         *
         * Creates a new instance in admins of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Admin` object.)
         * </em>
         */
        R.admins.create = function() {
          var TargetResource = $injector.get("Admin");
          var action = TargetResource["::create::organization::admins"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Organization.admins#createMany
         * @methodOf lbServices.Organization.admins
         *
         * @description
         *
         * Creates a new instance in admins of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Admin` object.)
         * </em>
         */
        R.admins.createMany = function() {
          var TargetResource = $injector.get("Admin");
          var action = TargetResource["::createMany::organization::admins"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Organization.admins#destroyAll
         * @methodOf lbServices.Organization.admins
         *
         * @description
         *
         * Deletes all admins of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.admins.destroyAll = function() {
          var TargetResource = $injector.get("Admin");
          var action = TargetResource["::delete::organization::admins"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Organization.admins#destroyById
         * @methodOf lbServices.Organization.admins
         *
         * @description
         *
         * Delete a related item by id for admins.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for admins
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.admins.destroyById = function() {
          var TargetResource = $injector.get("Admin");
          var action = TargetResource["::destroyById::organization::admins"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Organization.admins#findById
         * @methodOf lbServices.Organization.admins
         *
         * @description
         *
         * Find a related item by id for admins.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for admins
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Admin` object.)
         * </em>
         */
        R.admins.findById = function() {
          var TargetResource = $injector.get("Admin");
          var action = TargetResource["::findById::organization::admins"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Organization.admins#updateById
         * @methodOf lbServices.Organization.admins
         *
         * @description
         *
         * Update a related item by id for admins.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for admins
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Admin` object.)
         * </em>
         */
        R.admins.updateById = function() {
          var TargetResource = $injector.get("Admin");
          var action = TargetResource["::updateById::organization::admins"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Donation
 * @header lbServices.Donation
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Donation` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Donation",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/Donations/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use Donation.cause() instead.
        "prototype$__get__cause": {
          url: urlBase + "/Donations/:id/cause",
          method: "GET"
        },

        // INTERNAL. Use Donation.donor() instead.
        "prototype$__get__donor": {
          url: urlBase + "/Donations/:id/donor",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Donation#create
         * @methodOf lbServices.Donation
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Donation` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/Donations",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Donation#createMany
         * @methodOf lbServices.Donation
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Donation` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/Donations",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Donation#upsert
         * @methodOf lbServices.Donation
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Donation` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/Donations",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Donation#exists
         * @methodOf lbServices.Donation
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/Donations/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Donation#findById
         * @methodOf lbServices.Donation
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Donation` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/Donations/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Donation#find
         * @methodOf lbServices.Donation
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Donation` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/Donations",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Donation#findOne
         * @methodOf lbServices.Donation
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Donation` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/Donations/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Donation#updateAll
         * @methodOf lbServices.Donation
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "updateAll": {
          url: urlBase + "/Donations/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Donation#deleteById
         * @methodOf lbServices.Donation
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "deleteById": {
          url: urlBase + "/Donations/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Donation#count
         * @methodOf lbServices.Donation
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/Donations/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Donation#prototype$updateAttributes
         * @methodOf lbServices.Donation
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Donation` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/Donations/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Donation#createChangeStream
         * @methodOf lbServices.Donation
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/Donations/change-stream",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Donation#addCard
         * @methodOf lbServices.Donation
         *
         * @description
         *
         * Creates a new stripe customer based on the card information, then saves that customer ID to the user object.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `donor` – `{Object}` - 
         *
         *  - `token` – `{String}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `response` – `{string=}` - 
         */
        "addCard": {
          url: urlBase + "/Donations/addCard",
          method: "POST"
        },

        // INTERNAL. Use Cause.donations.findById() instead.
        "::findById::Cause::donations": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Causes/:id/donations/:fk",
          method: "GET"
        },

        // INTERNAL. Use Cause.donations.destroyById() instead.
        "::destroyById::Cause::donations": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Causes/:id/donations/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Cause.donations.updateById() instead.
        "::updateById::Cause::donations": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Causes/:id/donations/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Cause.donations.link() instead.
        "::link::Cause::donations": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Causes/:id/donations/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Cause.donations.unlink() instead.
        "::unlink::Cause::donations": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Causes/:id/donations/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Cause.donations.exists() instead.
        "::exists::Cause::donations": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Causes/:id/donations/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use Cause.donations() instead.
        "::get::Cause::donations": {
          isArray: true,
          url: urlBase + "/Causes/:id/donations",
          method: "GET"
        },

        // INTERNAL. Use Cause.donations.create() instead.
        "::create::Cause::donations": {
          url: urlBase + "/Causes/:id/donations",
          method: "POST"
        },

        // INTERNAL. Use Cause.donations.createMany() instead.
        "::createMany::Cause::donations": {
          isArray: true,
          url: urlBase + "/Causes/:id/donations",
          method: "POST"
        },

        // INTERNAL. Use Cause.donations.destroyAll() instead.
        "::delete::Cause::donations": {
          url: urlBase + "/Causes/:id/donations",
          method: "DELETE"
        },

        // INTERNAL. Use Cause.donations.count() instead.
        "::count::Cause::donations": {
          url: urlBase + "/Causes/:id/donations/count",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Donation#updateOrCreate
         * @methodOf lbServices.Donation
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Donation` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Donation#update
         * @methodOf lbServices.Donation
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.Donation#destroyById
         * @methodOf lbServices.Donation
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Donation#removeById
         * @methodOf lbServices.Donation
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.Donation#modelName
    * @propertyOf lbServices.Donation
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Donation`.
    */
    R.modelName = "Donation";


        /**
         * @ngdoc method
         * @name lbServices.Donation#cause
         * @methodOf lbServices.Donation
         *
         * @description
         *
         * Fetches belongsTo relation cause.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Cause` object.)
         * </em>
         */
        R.cause = function() {
          var TargetResource = $injector.get("Cause");
          var action = TargetResource["::get::Donation::cause"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Donation#donor
         * @methodOf lbServices.Donation
         *
         * @description
         *
         * Fetches belongsTo relation donor.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Donor` object.)
         * </em>
         */
        R.donor = function() {
          var TargetResource = $injector.get("Donor");
          var action = TargetResource["::get::Donation::donor"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Admin
 * @header lbServices.Admin
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Admin` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Admin",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/admins/:id",
      { 'id': '@id' },
      {

        /**
         * @ngdoc method
         * @name lbServices.Admin#prototype$__findById__accessTokens
         * @methodOf lbServices.Admin
         *
         * @description
         *
         * Find a related item by id for accessTokens.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for accessTokens
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Admin` object.)
         * </em>
         */
        "prototype$__findById__accessTokens": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/admins/:id/accessTokens/:fk",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Admin#prototype$__destroyById__accessTokens
         * @methodOf lbServices.Admin
         *
         * @description
         *
         * Delete a related item by id for accessTokens.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for accessTokens
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "prototype$__destroyById__accessTokens": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/admins/:id/accessTokens/:fk",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Admin#prototype$__updateById__accessTokens
         * @methodOf lbServices.Admin
         *
         * @description
         *
         * Update a related item by id for accessTokens.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for accessTokens
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Admin` object.)
         * </em>
         */
        "prototype$__updateById__accessTokens": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/admins/:id/accessTokens/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Admin.organization() instead.
        "prototype$__get__organization": {
          url: urlBase + "/admins/:id/organization",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Admin#prototype$__get__accessTokens
         * @methodOf lbServices.Admin
         *
         * @description
         *
         * Queries accessTokens of admin.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Admin` object.)
         * </em>
         */
        "prototype$__get__accessTokens": {
          isArray: true,
          url: urlBase + "/admins/:id/accessTokens",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Admin#prototype$__create__accessTokens
         * @methodOf lbServices.Admin
         *
         * @description
         *
         * Creates a new instance in accessTokens of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Admin` object.)
         * </em>
         */
        "prototype$__create__accessTokens": {
          url: urlBase + "/admins/:id/accessTokens",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Admin#prototype$__delete__accessTokens
         * @methodOf lbServices.Admin
         *
         * @description
         *
         * Deletes all accessTokens of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "prototype$__delete__accessTokens": {
          url: urlBase + "/admins/:id/accessTokens",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Admin#prototype$__count__accessTokens
         * @methodOf lbServices.Admin
         *
         * @description
         *
         * Counts accessTokens of admin.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "prototype$__count__accessTokens": {
          url: urlBase + "/admins/:id/accessTokens/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Admin#create
         * @methodOf lbServices.Admin
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Admin` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/admins",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Admin#createMany
         * @methodOf lbServices.Admin
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Admin` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/admins",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Admin#upsert
         * @methodOf lbServices.Admin
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Admin` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/admins",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Admin#exists
         * @methodOf lbServices.Admin
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/admins/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Admin#findById
         * @methodOf lbServices.Admin
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Admin` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/admins/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Admin#find
         * @methodOf lbServices.Admin
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Admin` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/admins",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Admin#findOne
         * @methodOf lbServices.Admin
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Admin` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/admins/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Admin#updateAll
         * @methodOf lbServices.Admin
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "updateAll": {
          url: urlBase + "/admins/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Admin#deleteById
         * @methodOf lbServices.Admin
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "deleteById": {
          url: urlBase + "/admins/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Admin#count
         * @methodOf lbServices.Admin
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/admins/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Admin#prototype$updateAttributes
         * @methodOf lbServices.Admin
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Admin` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/admins/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Admin#createChangeStream
         * @methodOf lbServices.Admin
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/admins/change-stream",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Admin#login
         * @methodOf lbServices.Admin
         *
         * @description
         *
         * Login a user with username/email and password.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `include` – `{string=}` - Related objects to include in the response. See the description of return value for more details.
         *   Default value: `user`.
         *
         *  - `rememberMe` - `boolean` - Whether the authentication credentials
         *     should be remembered in localStorage across app/browser restarts.
         *     Default: `true`.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The response body contains properties of the AccessToken created on login.
         * Depending on the value of `include` parameter, the body may contain additional properties:
         * 
         *   - `user` - `{User}` - Data of the currently logged in user. (`include=user`)
         * 
         *
         */
        "login": {
          params: {
            include: "user"
          },
          interceptor: {
            response: function(response) {
              var accessToken = response.data;
              LoopBackAuth.setUser(accessToken.id, accessToken.userId, accessToken.user);
              LoopBackAuth.rememberMe = response.config.params.rememberMe !== false;
              LoopBackAuth.save();
              return response.resource;
            }
          },
          url: urlBase + "/admins/login",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Admin#logout
         * @methodOf lbServices.Admin
         *
         * @description
         *
         * Logout a user with access token.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `access_token` – `{string}` - Do not supply this argument, it is automatically extracted from request headers.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "logout": {
          interceptor: {
            response: function(response) {
              LoopBackAuth.clearUser();
              LoopBackAuth.clearStorage();
              return response.resource;
            }
          },
          url: urlBase + "/admins/logout",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Admin#confirm
         * @methodOf lbServices.Admin
         *
         * @description
         *
         * Confirm a user registration with email verification token.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `uid` – `{string}` - 
         *
         *  - `token` – `{string}` - 
         *
         *  - `redirect` – `{string=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "confirm": {
          url: urlBase + "/admins/confirm",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Admin#resetPassword
         * @methodOf lbServices.Admin
         *
         * @description
         *
         * Reset password for a user with email.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "resetPassword": {
          url: urlBase + "/admins/reset",
          method: "POST"
        },

        // INTERNAL. Use Organization.admins.findById() instead.
        "::findById::organization::admins": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/organizations/:id/admins/:fk",
          method: "GET"
        },

        // INTERNAL. Use Organization.admins.destroyById() instead.
        "::destroyById::organization::admins": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/organizations/:id/admins/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Organization.admins.updateById() instead.
        "::updateById::organization::admins": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/organizations/:id/admins/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Organization.admins() instead.
        "::get::organization::admins": {
          isArray: true,
          url: urlBase + "/organizations/:id/admins",
          method: "GET"
        },

        // INTERNAL. Use Organization.admins.create() instead.
        "::create::organization::admins": {
          url: urlBase + "/organizations/:id/admins",
          method: "POST"
        },

        // INTERNAL. Use Organization.admins.createMany() instead.
        "::createMany::organization::admins": {
          isArray: true,
          url: urlBase + "/organizations/:id/admins",
          method: "POST"
        },

        // INTERNAL. Use Organization.admins.destroyAll() instead.
        "::delete::organization::admins": {
          url: urlBase + "/organizations/:id/admins",
          method: "DELETE"
        },

        // INTERNAL. Use Organization.admins.count() instead.
        "::count::organization::admins": {
          url: urlBase + "/organizations/:id/admins/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Admin#getCurrent
         * @methodOf lbServices.Admin
         *
         * @description
         *
         * Get data of the currently logged user. Fail with HTTP result 401
         * when there is no user logged in.
         *
         * @param {function(Object,Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "getCurrent": {
           url: urlBase + "/admins" + "/:id",
           method: "GET",
           params: {
             id: function() {
              var id = LoopBackAuth.currentUserId;
              if (id == null) id = '__anonymous__';
              return id;
            },
          },
          interceptor: {
            response: function(response) {
              LoopBackAuth.currentUserData = response.data;
              return response.resource;
            }
          },
          __isGetCurrentUser__ : true
        }
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Admin#updateOrCreate
         * @methodOf lbServices.Admin
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Admin` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Admin#update
         * @methodOf lbServices.Admin
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.Admin#destroyById
         * @methodOf lbServices.Admin
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Admin#removeById
         * @methodOf lbServices.Admin
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["removeById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Admin#getCachedCurrent
         * @methodOf lbServices.Admin
         *
         * @description
         *
         * Get data of the currently logged user that was returned by the last
         * call to {@link lbServices.Admin#login} or
         * {@link lbServices.Admin#getCurrent}. Return null when there
         * is no user logged in or the data of the current user were not fetched
         * yet.
         *
         * @returns {Object} A Admin instance.
         */
        R.getCachedCurrent = function() {
          var data = LoopBackAuth.currentUserData;
          return data ? new R(data) : null;
        };

        /**
         * @ngdoc method
         * @name lbServices.Admin#isAuthenticated
         * @methodOf lbServices.Admin
         *
         * @returns {boolean} True if the current user is authenticated (logged in).
         */
        R.isAuthenticated = function() {
          return this.getCurrentId() != null;
        };

        /**
         * @ngdoc method
         * @name lbServices.Admin#getCurrentId
         * @methodOf lbServices.Admin
         *
         * @returns {Object} Id of the currently logged-in user or null.
         */
        R.getCurrentId = function() {
          return LoopBackAuth.currentUserId;
        };

    /**
    * @ngdoc property
    * @name lbServices.Admin#modelName
    * @propertyOf lbServices.Admin
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Admin`.
    */
    R.modelName = "Admin";


        /**
         * @ngdoc method
         * @name lbServices.Admin#organization
         * @methodOf lbServices.Admin
         *
         * @description
         *
         * Fetches belongsTo relation organization.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Organization` object.)
         * </em>
         */
        R.organization = function() {
          var TargetResource = $injector.get("Organization");
          var action = TargetResource["::get::admin::organization"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.EntryTemplate
 * @header lbServices.EntryTemplate
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `EntryTemplate` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "EntryTemplate",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/EntryTemplates/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use EntryTemplate.customFields.findById() instead.
        "prototype$__findById__customFields": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/EntryTemplates/:id/customFields/:fk",
          method: "GET"
        },

        // INTERNAL. Use EntryTemplate.customFields.destroyById() instead.
        "prototype$__destroyById__customFields": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/EntryTemplates/:id/customFields/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use EntryTemplate.customFields.updateById() instead.
        "prototype$__updateById__customFields": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/EntryTemplates/:id/customFields/:fk",
          method: "PUT"
        },

        // INTERNAL. Use EntryTemplate.cause() instead.
        "prototype$__get__cause": {
          url: urlBase + "/EntryTemplates/:id/cause",
          method: "GET"
        },

        // INTERNAL. Use EntryTemplate.customFields() instead.
        "prototype$__get__customFields": {
          isArray: true,
          url: urlBase + "/EntryTemplates/:id/customFields",
          method: "GET"
        },

        // INTERNAL. Use EntryTemplate.customFields.create() instead.
        "prototype$__create__customFields": {
          url: urlBase + "/EntryTemplates/:id/customFields",
          method: "POST"
        },

        // INTERNAL. Use EntryTemplate.customFields.destroyAll() instead.
        "prototype$__delete__customFields": {
          url: urlBase + "/EntryTemplates/:id/customFields",
          method: "DELETE"
        },

        // INTERNAL. Use EntryTemplate.customFields.count() instead.
        "prototype$__count__customFields": {
          url: urlBase + "/EntryTemplates/:id/customFields/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.EntryTemplate#create
         * @methodOf lbServices.EntryTemplate
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `EntryTemplate` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/EntryTemplates",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.EntryTemplate#createMany
         * @methodOf lbServices.EntryTemplate
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `EntryTemplate` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/EntryTemplates",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.EntryTemplate#upsert
         * @methodOf lbServices.EntryTemplate
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `EntryTemplate` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/EntryTemplates",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.EntryTemplate#exists
         * @methodOf lbServices.EntryTemplate
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/EntryTemplates/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.EntryTemplate#findById
         * @methodOf lbServices.EntryTemplate
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `EntryTemplate` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/EntryTemplates/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.EntryTemplate#find
         * @methodOf lbServices.EntryTemplate
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `EntryTemplate` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/EntryTemplates",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.EntryTemplate#findOne
         * @methodOf lbServices.EntryTemplate
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `EntryTemplate` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/EntryTemplates/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.EntryTemplate#updateAll
         * @methodOf lbServices.EntryTemplate
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "updateAll": {
          url: urlBase + "/EntryTemplates/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.EntryTemplate#deleteById
         * @methodOf lbServices.EntryTemplate
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "deleteById": {
          url: urlBase + "/EntryTemplates/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.EntryTemplate#count
         * @methodOf lbServices.EntryTemplate
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/EntryTemplates/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.EntryTemplate#prototype$updateAttributes
         * @methodOf lbServices.EntryTemplate
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `EntryTemplate` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/EntryTemplates/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.EntryTemplate#createChangeStream
         * @methodOf lbServices.EntryTemplate
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/EntryTemplates/change-stream",
          method: "POST"
        },

        // INTERNAL. Use Cause.entryTemplates() instead.
        "::get::Cause::entryTemplates": {
          url: urlBase + "/Causes/:id/entryTemplates",
          method: "GET"
        },

        // INTERNAL. Use Cause.entryTemplates.create() instead.
        "::create::Cause::entryTemplates": {
          url: urlBase + "/Causes/:id/entryTemplates",
          method: "POST"
        },

        // INTERNAL. Use Cause.entryTemplates.createMany() instead.
        "::createMany::Cause::entryTemplates": {
          isArray: true,
          url: urlBase + "/Causes/:id/entryTemplates",
          method: "POST"
        },

        // INTERNAL. Use Cause.entryTemplates.update() instead.
        "::update::Cause::entryTemplates": {
          url: urlBase + "/Causes/:id/entryTemplates",
          method: "PUT"
        },

        // INTERNAL. Use Cause.entryTemplates.destroy() instead.
        "::destroy::Cause::entryTemplates": {
          url: urlBase + "/Causes/:id/entryTemplates",
          method: "DELETE"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.EntryTemplate#updateOrCreate
         * @methodOf lbServices.EntryTemplate
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `EntryTemplate` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.EntryTemplate#update
         * @methodOf lbServices.EntryTemplate
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.EntryTemplate#destroyById
         * @methodOf lbServices.EntryTemplate
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.EntryTemplate#removeById
         * @methodOf lbServices.EntryTemplate
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.EntryTemplate#modelName
    * @propertyOf lbServices.EntryTemplate
    * @description
    * The name of the model represented by this $resource,
    * i.e. `EntryTemplate`.
    */
    R.modelName = "EntryTemplate";

    /**
     * @ngdoc object
     * @name lbServices.EntryTemplate.customFields
     * @header lbServices.EntryTemplate.customFields
     * @object
     * @description
     *
     * The object `EntryTemplate.customFields` groups methods
     * manipulating `CustomField` instances related to `EntryTemplate`.
     *
     * Call {@link lbServices.EntryTemplate#customFields EntryTemplate.customFields()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.EntryTemplate#customFields
         * @methodOf lbServices.EntryTemplate
         *
         * @description
         *
         * Queries customFields of EntryTemplate.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CustomField` object.)
         * </em>
         */
        R.customFields = function() {
          var TargetResource = $injector.get("CustomField");
          var action = TargetResource["::get::EntryTemplate::customFields"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.EntryTemplate.customFields#count
         * @methodOf lbServices.EntryTemplate.customFields
         *
         * @description
         *
         * Counts customFields of EntryTemplate.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.customFields.count = function() {
          var TargetResource = $injector.get("CustomField");
          var action = TargetResource["::count::EntryTemplate::customFields"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.EntryTemplate.customFields#create
         * @methodOf lbServices.EntryTemplate.customFields
         *
         * @description
         *
         * Creates a new instance in customFields of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CustomField` object.)
         * </em>
         */
        R.customFields.create = function() {
          var TargetResource = $injector.get("CustomField");
          var action = TargetResource["::create::EntryTemplate::customFields"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.EntryTemplate.customFields#createMany
         * @methodOf lbServices.EntryTemplate.customFields
         *
         * @description
         *
         * Creates a new instance in customFields of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CustomField` object.)
         * </em>
         */
        R.customFields.createMany = function() {
          var TargetResource = $injector.get("CustomField");
          var action = TargetResource["::createMany::EntryTemplate::customFields"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.EntryTemplate.customFields#destroyAll
         * @methodOf lbServices.EntryTemplate.customFields
         *
         * @description
         *
         * Deletes all customFields of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.customFields.destroyAll = function() {
          var TargetResource = $injector.get("CustomField");
          var action = TargetResource["::delete::EntryTemplate::customFields"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.EntryTemplate.customFields#destroyById
         * @methodOf lbServices.EntryTemplate.customFields
         *
         * @description
         *
         * Delete a related item by id for customFields.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for customFields
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.customFields.destroyById = function() {
          var TargetResource = $injector.get("CustomField");
          var action = TargetResource["::destroyById::EntryTemplate::customFields"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.EntryTemplate.customFields#findById
         * @methodOf lbServices.EntryTemplate.customFields
         *
         * @description
         *
         * Find a related item by id for customFields.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for customFields
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CustomField` object.)
         * </em>
         */
        R.customFields.findById = function() {
          var TargetResource = $injector.get("CustomField");
          var action = TargetResource["::findById::EntryTemplate::customFields"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.EntryTemplate.customFields#updateById
         * @methodOf lbServices.EntryTemplate.customFields
         *
         * @description
         *
         * Update a related item by id for customFields.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for customFields
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CustomField` object.)
         * </em>
         */
        R.customFields.updateById = function() {
          var TargetResource = $injector.get("CustomField");
          var action = TargetResource["::updateById::EntryTemplate::customFields"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.EntryTemplate#cause
         * @methodOf lbServices.EntryTemplate
         *
         * @description
         *
         * Fetches belongsTo relation cause.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Cause` object.)
         * </em>
         */
        R.cause = function() {
          var TargetResource = $injector.get("Cause");
          var action = TargetResource["::get::EntryTemplate::cause"];
          return action.apply(R, arguments);
        };

    return R;
  }]);


module
  .factory('LoopBackAuth', function() {
    var props = ['accessTokenId', 'currentUserId'];
    var propsPrefix = '$LoopBack$';

    function LoopBackAuth() {
      var self = this;
      props.forEach(function(name) {
        self[name] = load(name);
      });
      this.rememberMe = undefined;
      this.currentUserData = null;
    }

    LoopBackAuth.prototype.save = function() {
      var self = this;
      var storage = this.rememberMe ? localStorage : sessionStorage;
      props.forEach(function(name) {
        save(storage, name, self[name]);
      });
    };

    LoopBackAuth.prototype.setUser = function(accessTokenId, userId, userData) {
      this.accessTokenId = accessTokenId;
      this.currentUserId = userId;
      this.currentUserData = userData;
    }

    LoopBackAuth.prototype.clearUser = function() {
      this.accessTokenId = null;
      this.currentUserId = null;
      this.currentUserData = null;
    }

    LoopBackAuth.prototype.clearStorage = function() {
      props.forEach(function(name) {
        save(sessionStorage, name, null);
        save(localStorage, name, null);
      });
    };

    return new LoopBackAuth();

    // Note: LocalStorage converts the value to string
    // We are using empty string as a marker for null/undefined values.
    function save(storage, name, value) {
      var key = propsPrefix + name;
      if (value == null) value = '';
      storage[key] = value;
    }

    function load(name) {
      var key = propsPrefix + name;
      return localStorage[key] || sessionStorage[key] || null;
    }
  })
  .config(['$httpProvider', function($httpProvider) {
    $httpProvider.interceptors.push('LoopBackAuthRequestInterceptor');
  }])
  .factory('LoopBackAuthRequestInterceptor', [ '$q', 'LoopBackAuth',
    function($q, LoopBackAuth) {
      return {
        'request': function(config) {

          // filter out non urlBase requests
          if (config.url.substr(0, urlBase.length) !== urlBase) {
            return config;
          }

          if (LoopBackAuth.accessTokenId) {
            config.headers[authHeader] = LoopBackAuth.accessTokenId;
          } else if (config.__isGetCurrentUser__) {
            // Return a stub 401 error for User.getCurrent() when
            // there is no user logged in
            var res = {
              body: { error: { status: 401 } },
              status: 401,
              config: config,
              headers: function() { return undefined; }
            };
            return $q.reject(res);
          }
          return config || $q.when(config);
        }
      }
    }])

  /**
   * @ngdoc object
   * @name lbServices.LoopBackResourceProvider
   * @header lbServices.LoopBackResourceProvider
   * @description
   * Use `LoopBackResourceProvider` to change the global configuration
   * settings used by all models. Note that the provider is available
   * to Configuration Blocks only, see
   * {@link https://docs.angularjs.org/guide/module#module-loading-dependencies Module Loading & Dependencies}
   * for more details.
   *
   * ## Example
   *
   * ```js
   * angular.module('app')
   *  .config(function(LoopBackResourceProvider) {
   *     LoopBackResourceProvider.setAuthHeader('X-Access-Token');
   *  });
   * ```
   */
  .provider('LoopBackResource', function LoopBackResourceProvider() {
    /**
     * @ngdoc method
     * @name lbServices.LoopBackResourceProvider#setAuthHeader
     * @methodOf lbServices.LoopBackResourceProvider
     * @param {string} header The header name to use, e.g. `X-Access-Token`
     * @description
     * Configure the REST transport to use a different header for sending
     * the authentication token. It is sent in the `Authorization` header
     * by default.
     */
    this.setAuthHeader = function(header) {
      authHeader = header;
    };

    /**
     * @ngdoc method
     * @name lbServices.LoopBackResourceProvider#setUrlBase
     * @methodOf lbServices.LoopBackResourceProvider
     * @param {string} url The URL to use, e.g. `/api` or `//example.com/api`.
     * @description
     * Change the URL of the REST API server. By default, the URL provided
     * to the code generator (`lb-ng` or `grunt-loopback-sdk-angular`) is used.
     */
    this.setUrlBase = function(url) {
      urlBase = url;
    };

    /**
     * @ngdoc method
     * @name lbServices.LoopBackResourceProvider#getUrlBase
     * @methodOf lbServices.LoopBackResourceProvider
     * @description
     * Get the URL of the REST API server. The URL provided
     * to the code generator (`lb-ng` or `grunt-loopback-sdk-angular`) is used.
     */
    this.getUrlBase = function() {
      return urlBase;
    };

    this.$get = ['$resource', function($resource) {
      return function(url, params, actions) {
        var resource = $resource(url, params, actions);

        // Angular always calls POST on $save()
        // This hack is based on
        // http://kirkbushell.me/angular-js-using-ng-resource-in-a-more-restful-manner/
        resource.prototype.$save = function(success, error) {
          // Fortunately, LoopBack provides a convenient `upsert` method
          // that exactly fits our needs.
          var result = resource.upsert.call(this, {}, this, success, error);
          return result.$promise || result;
        };
        return resource;
      };
    }];
  });

})(window, window.angular);
