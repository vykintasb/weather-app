angular.module('weatherApp.services', [])
  .factory('openweathermapAPIservice', function($http) {

    var openweathermapAPI = {};

    openweathermapAPI.getCities = function() {
      return $http({
        method: 'JSONP',
         url: 'http://api.openweathermap.org/data/2.5/group?id=593116,598316,2643743,2988507,2950159,2990440,3173435,3117735,3169070,703448&units=metric&callback=JSON_CALLBACK'
      });
    };

    openweathermapAPI.getCityDetails = function(id) {
      return $http({
        method: 'JSONP', 
        url: 'http://api.openweathermap.org/data/2.5/weather?id='+ id +'&units=metric&callback=JSON_CALLBACK'
      });
    };

    openweathermapAPI.getCityWeather = function() {

        var myLat;
        var myLon;
        var Geo = {};

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(success, error);
        }

        //Get the latitude and the longitude;
        function success(position) {
            Geo.lat = position.coords.latitude;
            Geo.lng = position.coords.longitude;
            populateHeader(Geo.lat, Geo.lng);
        }

        function error(){
            console.log("Geolocator failed");
        }

        function populateHeader(lat, lng){
            $('#Lat').html(lat);
            $('#Long').html(lng);
            console.log("coords: "+ lat + " | "+lng);

            localStorage['myLat'] = lat;
            localStorage['myLon'] = lng;
            console.log("...saved");
        }

        myLat = localStorage['myLat'] || 'defaultValue';
        myLon = localStorage['myLon'] || 'defaultValue';

        console.log("LAT is: "+myLat);
        console.log("LON is: "+myLon);

        return $http({
            method: 'JSONP',
            url: 'http://api.openweathermap.org/data/2.5/weather?lat='+myLat+'5&lon='+myLon+'8&units=metric&callback=JSON_CALLBACK'
        });
    };

    return openweathermapAPI;
  });
