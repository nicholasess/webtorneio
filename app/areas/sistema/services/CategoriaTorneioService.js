(function () {
    'use strict';

    angular
        .module('app')
        .factory('CategoriaTorneioService', CategoriaTorneioService);

    CategoriaTorneioService.$inject = ['$http', 'APP_SETTINGS','$window'];

    function CategoriaTorneioService($http, APP_SETTINGS,$window) {
        return {
            Listar: function () {
                var token = $window.localStorage.getItem('token');
                return $http.get(APP_SETTINGS.SERVICE_URL + 'api/categoriatorneio',{ headers: { 'Authorization': 'Bearer ' + token } });
            }
        }
    }
})();
