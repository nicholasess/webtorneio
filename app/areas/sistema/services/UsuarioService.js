(function () {
    'use strict';

    angular
    .module('app')
    .factory('UsuarioService', UsuarioService);

    UsuarioService.$inject = ['$http', 'APP_SETTINGS', '$window'];

    function UsuarioService($http, APP_SETTINGS, $window) {
        return {
            getInfo: getInfo,
            login: login
        };


        function getInfo() {
            var token = localStorage.getItem('token');
            return $http.get(APP_SETTINGS.SERVICE_URL + 'api/usuario', { headers: { 'Authorization': 'Bearer ' + token } });
        }

        function login(data) {
            var dt = "grant_type=password&username=" + data.email + "&password=" + data.password;
            return $http.post(APP_SETTINGS.SERVICE_URL + 'api/security/token', dt, { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } });
        }
    }
})();



