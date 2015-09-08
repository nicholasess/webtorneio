(function () {
    'use strict';

    angular
        .module('app')
        .factory('AtletaAcademiaService', AtletaAcademiaService);

    AtletaAcademiaService.$inject = ['$http', 'APP_SETTINGS', '$window'];

    function AtletaAcademiaService($http, APP_SETTINGS, $window) {
        return {
            Listar: function () {
                var token = $window.localStorage.getItem('token');
                return $http.get(APP_SETTINGS.SERVICE_URL + 'api/atletaacademia', { headers: { 'Authorization': 'Bearer ' + token } });
            },
            Cadastrar: function (item) {
                var token = $window.localStorage.getItem('token');
                return $http.post(APP_SETTINGS.SERVICE_URL + 'api/atletaacademia/cadastro', item, { headers: { 'Authorization': 'Bearer ' + token } });
            },
            Atualizar: function (item) {
                var token = $window.localStorage.getItem('token');
                return $http.put(APP_SETTINGS.SERVICE_URL + 'api/atletaacademia/cadastro', item, { headers: { 'Authorization': 'Bearer ' + token } });
            },
            Editar: function (id) {
                var token = $window.localStorage.getItem('token');
                return $http.get(APP_SETTINGS.SERVICE_URL + 'api/atletaacademia/info?id=' + id, { headers: { 'Authorization': 'Bearer ' + token } });
            },
            Deletar: function (item) {
                var token = $window.localStorage.getItem('token');
                return $http({
                    method: 'DELETE',
                    url: APP_SETTINGS.SERVICE_URL + 'api/atletaacademia/exclusao',
                    data: { Id: item.id },
                    headers: { 'Authorization': 'Bearer ' + token, 'Content-Type': 'application/json' }
                });
            }
        }
    }
})();
