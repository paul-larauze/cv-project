'use strict';

angular.module('myApp.presentation', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/presentation', {
    templateUrl: 'presentation/presentation.html',
    controller: 'PresentationCtrl'
  });
}])

 .controller('PresentationCtrl', function ($scope, $http, $location) {
  	$http.get('json/presentation.json').success(function(data) {
    $scope.presentation = data;
    
  });
    $scope.isActive = function (viewLocation) { 
        return viewLocation === $location.path();
    };
  });