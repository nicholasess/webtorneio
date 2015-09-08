(function () {
    'use strict';

    angular
        .module('app')
        .factory('PremiacaoCategoriaService', PremiacaoCategoriaService);

    PremiacaoCategoriaService.$inject = ['$http', 'APP_SETTINGS','$window'];

    function PremiacaoCategoriaService($http, APP_SETTINGS,$window) {
        return {
            Listar: function () {
                var token = $window.localStorage.getItem('token');
                return $http.get(APP_SETTINGS.SERVICE_URL + 'api/premiacaocategoria',{ headers: { 'Authorization': 'Bearer ' + token } });
            }
        }
    }
})();
