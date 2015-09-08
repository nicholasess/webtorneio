
(function () {
    'use strict';

    angular
        .module('app')
        .controller('estado.edicao', Controller);

    Controller.$inject = ['$scope','PaisService','EstadoService','$location', '$routeParams'];

    function Controller($scope, PaisService, EstadoService,$location, $routeParams) {
        $scope.estado = {Sigla: "", PaisId: "", Id: ""};
        $scope.messageError = "";

        EstadoService.Editar($routeParams.id).then(function(item){
          console.log(item.data);
          var data = item.data;
          $scope.estado['Sigla'] = data.sigla;
          $scope.estado['PaisId'] = data.paisid;
          $scope.estado['Id'] = data.id;
        })

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
              EstadoService.Atualizar(item).then(function(item){
                console.log(item);
                $location.path('/estado');
              }, function(item){
                console.log(item);
                $scope.errors.push(item.data);
                status = false;
              })
            }
        }
    }
})();
