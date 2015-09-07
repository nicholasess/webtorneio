(function () {
    'use strict';

    angular
        .module('app')
        .factory('ResponsavelAcademiaService', ResponsavelAcademiaService);

    ResponsavelAcademiaService.$inject = ['$http', 'APP_SETTINGS','$window'];

    function ResponsavelAcademiaService($http, APP_SETTINGS,$window) {
        return {
            Listar: function () {
                var token = $window.localStorage.getItem('token');
                return $http.get(APP_SETTINGS.SERVICE_URL + 'api/responsavelacademia',{ headers: { 'Authorization': 'Bearer ' + token } });
            }
        }
    }
})();
