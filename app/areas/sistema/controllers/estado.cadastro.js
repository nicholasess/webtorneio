
(function () {
    'use strict';

    angular
        .module('app')
        .controller('estado.cadastro', Controller);

    Controller.$inject = ['$scope','PaisService','EstadoService','$location'];

    function Controller($scope, PaisService, EstadoService,$location) {
        $scope.estado = {Sigla: "", PaisId: ""};
        $scope.messageError = "";

        $scope.ListarPaises = function() {

            var promise = PaisService.Listar();

            promise.then(
               function (result) {
                console.log(result.data);
                   $scope.paises = result.data;
               });
        }

        $scope.ListarPaises();

        $scope.cadastro = function(item){
            var status = true;
            $scope.errors = [];
            if(item.Sigla == ""){
              $scope.errors.push("Campo Sigla está vázio");
              status = false;
            }
            if(item.PaisId == ""){
              $scope.errors.push("Campo Pais não foi selecionado");
              status = false;
            }

            if(status){
              item.Sigla = item.Sigla.toUpperCase();
              EstadoService.Cadastrar(item).then(function(item){
                $location.path('/estado');
              }, function(item){
                $scope.messageError = item.data;
              })
            }
        }
    }
})();
