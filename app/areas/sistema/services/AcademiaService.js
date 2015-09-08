(function () {
    'use strict';

    angular
        .module('app')
        .factory('AcademiaService', AcademiaService);

    AcademiaService.$inject = ['$http', 'APP_SETTINGS','$window', 'Upload'];

    function AcademiaService($http, APP_SETTINGS,$window, Upload) {
        var token = $window.localStorage.getItem('token');
        return {
            Listar: function () {

                return $http.get(APP_SETTINGS.SERVICE_URL + 'api/academia',{ headers: { 'Authorization': 'Bearer ' + token } });
            },
            Cadastrar: function (item) {

                return $http.post(APP_SETTINGS.SERVICE_URL + 'api/academia/cadastro',item,{ headers: { 'Authorization': 'Bearer ' + token } });
            },
            Atualizar: function (item) {

                return $http.put(APP_SETTINGS.SERVICE_URL + 'api/academia/cadastro',item,{ headers: { 'Authorization': 'Bearer ' + token } });
            },
            Editar: function (id) {

                return $http.get(APP_SETTINGS.SERVICE_URL + 'api/academia/info?id='+id,{ headers: { 'Authorization': 'Bearer ' + token } });
            },
            Deletar: function (item) {

                return $http({method: 'DELETE',
                       url: APP_SETTINGS.SERVICE_URL + 'api/academia/exclusao',
                       data:{Id: item.id},
                       headers: {'Authorization': 'Bearer ' + token,'Content-Type':'application/json'}});
            },
            Upload: function(fields, file){
                Upload.upload({
                  url: APP_SETTINGS.SERVICE_URL + 'api/academia/cadastro',
                  headers: { 'Authorization': 'Bearer ' + token },
                  fields: fields,
                  file: file
              }).progress(function (evt) {
                  var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
                  console.log('progress: ' + progressPercentage + '% ' + evt.config.file.name);
              }).success(function (data, status, headers, config) {
                  console.log('file ' + config.file.name + 'uploaded. Response: ' + data);
              }).error(function (data, status, headers, config) {
                  console.log('error status: ' + status);
              })
            }
        }
    }
})();
