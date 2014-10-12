'use strict';

var gydeControllers = angular.module('gydeControllers', ['gydeServices', 'gydeModels']);

gydeControllers.controller('MainController', ['$scope', 'User',
  function($scope, User) {
    // Available to all child controllers via "$scope.$parent.user"
    $scope.user = new User();
  }
]);

gydeControllers.controller('HomeController', ['$scope',
  function($scope) {
    $scope.user = $scope.$parent.user;
  }
]);

gydeControllers.controller('ConditionsController', ['$scope',
  function($scope) {
    $scope.user = $scope.$parent.user;
  }
]);

gydeControllers.controller('DetailsController', ['$scope',
  function($scope) {
    $scope.user = $scope.$parent.user;
  }
]);

gydeControllers.controller('ProviderController', ['$scope',
  function($scope) {
    $scope.user = $scope.$parent.user;
  }
]);

gydeControllers.controller('PrioritiesController', ['$scope',
  function($scope) {
    $scope.user = $scope.$parent.user;
  }
]);

gydeControllers.controller('NavigationController', ['$scope',
  function($scope) {
    $scope.user = $scope.$parent.user;
  }
]);

gydeControllers.controller('ResultsController', ['$scope', '$http', 'UserService',
  function($scope, $http, UserService) {
    $scope.user = $scope.$parent.user;
    $scope.loading = true;

    console.log('Sending...', $scope.user);

    UserService.send($scope.user).then(function(results) {
      $scope.loading = false;
      $scope.results = results.data;
    });
  }
]);

gydeControllers.controller('MembershipsController', ['$scope', '$http',
  function($scope, $http) {
    var url = '/memberships.json?group_id=1';
    $http.get(url).then(function(response) {
      $scope.memberships = response.data;
    });
  }
]);

