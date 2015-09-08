(function () {
    'use strict';

    angular
        .module('app')
        .factory('AtletaService', AtletaService);

    AtletaService.$inject = ['$http', 'APP_SETTINGS','$window'];

    function AtletaService($http, APP_SETTINGS,$window) {
        return {
            Listar: function () {
                var token = $window.localStorage.getItem('token');
                return $http.get(APP_SETTINGS.SERVICE_URL + 'api/atleta',{ headers: { 'Authorization': 'Bearer ' + token } });
            }
        }
    }
})();
