(function () {
    'use strict';

    angular
        .module('app')
        .factory('PremiacaoService', PremiacaoService);

    PremiacaoService.$inject = ['$http', 'APP_SETTINGS','$window'];

    function PremiacaoService($http, APP_SETTINGS,$window) {
        return {
            Listar: function () {
                var token = $window.localStorage.getItem('token');
                return $http.get(APP_SETTINGS.SERVICE_URL + 'api/premiacao',{ headers: { 'Authorization': 'Bearer ' + token } });
            }
        }
    }
})();
