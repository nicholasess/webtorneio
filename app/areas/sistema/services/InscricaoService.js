(function () {
    'use strict';

    angular
        .module('app')
        .factory('InscricaoService', InscricaoService);

    InscricaoService.$inject = ['$http', 'APP_SETTINGS','$window'];

    function InscricaoService($http, APP_SETTINGS,$window) {
        return {
            Listar: function () {
                var token = $window.localStorage.getItem('token');
                return $http.get(APP_SETTINGS.SERVICE_URL + 'api/inscricao',{ headers: { 'Authorization': 'Bearer ' + token } });
            }
        }
    }
})();
