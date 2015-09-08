(function () {
    'use strict';

    var app = angular.module('app', ['ngRoute']);

    app.controller('AppCtrl', function AppCtrl($scope, $http) {
        $scope.title = 'Home';

    });

    angular.module('app').constant('APP_SETTINGS', {
        //"SERVICE_URL": "http://localhost:25949/"
        "SERVICE_URL": "http://200.98.146.173/"
    });

    app.filter('startFrom', function () {
        return function (input, start) {
            if (input) {
                start = +start;
                return input.slice(start);
            }
            return [];
        };
    });

    angular.module('app').run(function ($rootScope, $location, $window) {

    });
})();