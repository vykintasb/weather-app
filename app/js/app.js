angular.module('weatherApp', [
  'weatherApp.services',
  'weatherApp.controllers',
  'ngRoute'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.
	when("/cities", {templateUrl: "partials/cities.html", controller: "citiesController"}).
	when("/cities/:id", {templateUrl: "partials/city.html", controller: "cityController"}).
	otherwise({redirectTo: '/cities'});
}]);