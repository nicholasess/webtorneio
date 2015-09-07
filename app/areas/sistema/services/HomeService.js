(function () {
    'use strict';

    angular
        .module('app')
        .factory('HomeService', HomeService);

    HomeService.$inject = ['$http', 'APP_SETTINGS'];

    function HomeService($http, APP_SETTINGS) {
        return {
            Listar: function () {
                return $http.get(APP_SETTINGS.SERVICE_URL + 'api/home');
            }
        }
    }
})();
