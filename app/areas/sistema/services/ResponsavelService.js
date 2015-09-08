(function () {
    'use strict';

    angular
        .module('app')
        .factory('ResponsavelService', ResponsavelService);

    ResponsavelService.$inject = ['$http', 'APP_SETTINGS','$window'];

    function ResponsavelService($http, APP_SETTINGS,$window) {
        return {
            Listar: function () {
                var token = $window.localStorage.getItem('token');
                return $http.get(APP_SETTINGS.SERVICE_URL + 'api/responsavel',{ headers: { 'Authorization': 'Bearer ' + token } });
            }
        }
    }
})();
