angular.module('weatherApp.controllers', []).

    controller('citiesController', function($scope, openweathermapAPIservice) {
        $scope.nameFilter = null;
        $scope.cityList = [];

        $scope.searchFilter = function (city) {
            var re = new RegExp($scope.nameFilter, 'i');
            return !$scope.nameFilter || re.test(city.name);
        };

        $scope.mySplit = function(string, nb) {
            $scope.array = string.split('.');
            return $scope.result = $scope.array[nb];
        };



        openweathermapAPIservice.getCities().success(function (response) {
            $scope.cityList = response.list;
        });

        $scope.predicate = 'city.name';
        $scope.reverse = true;
        $scope.order = function(predicate) {
            $scope.reverse = ($scope.predicate === predicate) ? !$scope.reverse : false;
            $scope.predicate = predicate;
        };
    })

    .controller('cityController', function($scope, $routeParams, openweathermapAPIservice) {
        $scope.id = $routeParams.id;
        $scope.city = null;

        openweathermapAPIservice.getCityDetails($scope.id).success(function (response) {
            $scope.city = response;
        });

    })

    .controller('currentCityController', function($scope, openweathermapAPIservice) {
        openweathermapAPIservice.getCityWeather().success(function (response) {
            $scope.city = response;

        });
    });

