
(function () {
    'use strict';

    angular
        .module('app')
        .controller('cidade.cadastro', Controller);

    Controller.$inject = ['$scope','EstadoService'];

    Controller.$inject = ['$scope','CidadeService', 'EstadoService','$location'];

    function Controller($scope, CidadeService, EstadoService,$location) {
        $scope.cidade = {Nome: "", EstadoId: ""};
        $scope.messageError = "";

        $scope.ListarEstados = function() {

            var promise = EstadoService.Listar();

            promise.then(
               function (result) {
                console.log(result.data);
                   $scope.estados = result.data;
               });
        }

        $scope.ListarEstados();

        $scope.cadastro = function(item){
            var status = true;
            $scope.errors = [];
            if(item.Nome == ""){
              $scope.errors.push("Campo Nome está vázio");
              status = false;
            }
            if(item.EstadoId == ""){
              $scope.errors.push("Campo Estado não foi selecionado");
              status = false;
            }

            if(status){
              item.Nome = item.Nome.toUpperCase();
              CidadeService.Cadastrar(item).then(function(item){
                $location.path('/cidade');
              }, function(item){
                console.log(item);
                $scope.errors = [];
                $scope.errors.push(item.data);
              })
            }
        }
    }
})();
