(function () {
    'use strict';

    angular
        .module('app')
        .factory('ValorInscricaoService', ValorInscricaoService);

    ValorInscricaoService.$inject = ['$http', 'APP_SETTINGS','$window'];

    function ValorInscricaoService($http, APP_SETTINGS,$window) {
        return {
            Listar: function () {
                var token = $window.localStorage.getItem('token');
                return $http.get(APP_SETTINGS.SERVICE_URL + 'api/valorinscricao',{ headers: { 'Authorization': 'Bearer ' + token } });
            }
        }
    }
})();
