(function () {
    'use strict';

    angular
        .module('app')
        .factory('TorneioService', TorneioService);

    TorneioService.$inject = ['$http', 'APP_SETTINGS','$window'];

    function TorneioService($http, APP_SETTINGS,$window) {
        return {
            Listar: function () {
                var token = $window.localStorage.getItem('token');
                return $http.get(APP_SETTINGS.SERVICE_URL + 'api/torneio',{ headers: { 'Authorization': 'Bearer ' + token } });
            }
        }
    }
})();
