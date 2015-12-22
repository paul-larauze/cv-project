'use strict';

angular.module('myApp.content', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/content', {
    templateUrl: 'content/content.html',
    controller: 'ContentCtrl'
  });
}])

 .controller('ContentCtrl', function ($scope, $http, $location) {
  	$http.get('json/experiences.json').success(function(data) {
    $scope.experiences = data.experiences;    
  });
  	$http.get('json/skills.json')
  	.then(function(response){
  		$scope.myskills = response.data.skills;
  	});
  	$http.get('json/studies.json').success(function(data) {
    $scope.studies = data.studies;
    
  });
    
  });