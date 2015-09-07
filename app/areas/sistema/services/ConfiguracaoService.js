(function () {
    'use strict';

    angular
        .module('app')
        .factory('ConfiguracaoService', ConfiguracaoService);

    ConfiguracaoService.$inject = ['$http', 'APP_SETTINGS','$window'];

    function ConfiguracaoService($http, APP_SETTINGS,$window) {
        return {
            Listar: function () {
                var token = $window.localStorage.getItem('token');
                return $http.get(APP_SETTINGS.SERVICE_URL + 'api/configuracao',{ headers: { 'Authorization': 'Bearer ' + token } });
            }
        }
    }
})();
