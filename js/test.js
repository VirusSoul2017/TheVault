var testApp = angular.module('testApp', []);

  testApp.controller('ContractListController', function($scope, $http) {
    $http.get('data/contracts.json').success(function(data) {
      $scope.contracts = data;
    });
  });

  testApp.controller('PropertyListController', function($scope, $http) {
    $http.get('data/properties.json').success(function(data) {
      $scope.properties = data;
    });
  });

  testApp.controller('CompanyListController', function($scope, $http) {
    $http.get('data/companies.json').success(function(data) {
      $scope.companies = data;
    });
  });

