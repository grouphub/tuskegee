'use strict';

var gydeServices = angular.module('gydeServices', []);

gydeServices.factory('UserService', ['$http',
  function($http) {
    return {
      send: function(user) {
        return $http.post('/users', { user: user });
      }
    }
  }
]);
