'use strict';

/* Filters */

angular.module('weatherApp.filters', []).
  filter('interpolate', ['version', function(version) {
    return function(text) {
      return String(text).replace(/\%VERSION\%/mg, version);
    };
  }])
    .filter('round', function() {
    return function(input) {
        return Math.round(input);
    };
});
