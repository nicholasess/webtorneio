angular.module('app').config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            controller: 'LoginCtrl',
            controllerAs: 'vm',
            templateUrl: 'app/areas/site/views/home/login.html'
        })
        .otherwise({
            controller: 'HomeCtrl as vm',
            templateUrl: '404.html',
            requiresLogin: false
        });

});