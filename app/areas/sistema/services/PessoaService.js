(function () {
    'use strict';

    angular
        .module('app')
        .factory('PessoaService', PessoaService);

    PessoaService.$inject = ['$http', 'APP_SETTINGS','$window'];

    function PessoaService($http, APP_SETTINGS,$window) {
        return {
            Listar: function () {
                var token = $window.localStorage.getItem('token');
                return $http.get(APP_SETTINGS.SERVICE_URL + 'api/pessoa',{ headers: { 'Authorization': 'Bearer ' + token } });
            }
        }
    }
})();
