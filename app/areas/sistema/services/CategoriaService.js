(function () {
    'use strict';

    angular
        .module('app')
        .factory('CategoriaService', CategoriaService);

    CategoriaService.$inject = ['$http', 'APP_SETTINGS','$window'];

    function CategoriaService($http, APP_SETTINGS,$window) {
        return {
            Listar: function () {
                var token = $window.localStorage.getItem('token');
                return $http.get(APP_SETTINGS.SERVICE_URL + 'api/categoria',{ headers: { 'Authorization': 'Bearer ' + token } });
            },
            Cadastrar: function (item) {
                var token = $window.localStorage.getItem('token');
                return $http.post(APP_SETTINGS.SERVICE_URL + 'api/categoria/cadastro',item,{ headers: { 'Authorization': 'Bearer ' + token } });
            },
            Atualizar: function (item) {
                var token = $window.localStorage.getItem('token');
                return $http.put(APP_SETTINGS.SERVICE_URL + 'api/categoria/cadastro',item,{ headers: { 'Authorization': 'Bearer ' + token } });
            },
            Editar: function (id) {
                console.log(id);
                var token = $window.localStorage.getItem('token');
                return $http.get(APP_SETTINGS.SERVICE_URL + 'api/categoria/info?id='+id,{ headers: { 'Authorization': 'Bearer ' + token } });
            },
            Deletar: function (item) {
                var token = $window.localStorage.getItem('token');
                return $http({method: 'DELETE',
                       url: APP_SETTINGS.SERVICE_URL + 'api/categoria/exclusao',
                       data:{Id: item.id},
                       headers: {'Authorization': 'Bearer ' + token,'Content-Type':'application/json'}});
            }
        }
    }
})();
