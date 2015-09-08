(function () {
    'use strict';

    angular
        .module('app')
        .factory('EstadoService', EstadoService);

    EstadoService.$inject = ['$http', 'APP_SETTINGS','$window'];

    function EstadoService($http, APP_SETTINGS,$window) {
        return {
            Listar: function () {
                var token = $window.localStorage.getItem('token');
                return $http.get(APP_SETTINGS.SERVICE_URL + 'api/estado',{ headers: { 'Authorization': 'Bearer ' + token } });
            },
            Cadastrar: function (item) {
                var token = $window.localStorage.getItem('token');
                return $http.post(APP_SETTINGS.SERVICE_URL + 'api/estado/cadastro',item,{ headers: { 'Authorization': 'Bearer ' + token } });
            },
            Atualizar: function (item) {
                console.log(item);
                var token = $window.localStorage.getItem('token');
                return $http.put(APP_SETTINGS.SERVICE_URL + 'api/estado/cadastro',item,{ headers: { 'Authorization': 'Bearer ' + token } });
            },
            Editar: function (id) {
                var token = $window.localStorage.getItem('token');
                return $http.get(APP_SETTINGS.SERVICE_URL + 'api/estado/info?id='+id,{ headers: { 'Authorization': 'Bearer ' + token } });
            },
            Deletar: function (item) {
                var token = $window.localStorage.getItem('token');
                return $http({method: 'DELETE',
                       url: APP_SETTINGS.SERVICE_URL + 'api/estado/exclusao',
                       data:{Id: item.id},
                       headers: {'Authorization': 'Bearer ' + token,'Content-Type':'application/json'}});
            },
            ListarPorPais: function(id){
                var token = $window.localStorage.getItem('token');
                return $http.get(APP_SETTINGS.SERVICE_URL + 'api/estado/pais?id='+id,{ headers: { 'Authorization': 'Bearer ' + token } });
            }
        }
    }
})();
