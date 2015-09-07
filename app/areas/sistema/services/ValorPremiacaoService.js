(function () {
    'use strict';

    angular
        .module('app')
        .factory('ValorPremiacaoService', ValorPremiacaoService);

    ValorPremiacaoService.$inject = ['$http', 'APP_SETTINGS','$window'];

    function ValorPremiacaoService($http, APP_SETTINGS,$window) {
        return {
            Listar: function () {
                var token = $window.localStorage.getItem('token');
                return $http.get(APP_SETTINGS.SERVICE_URL + 'api/valorpremiacao',{ headers: { 'Authorization': 'Bearer ' + token } });
            }
        }
    }
})();
