
(function () {
    'use strict';

    angular
        .module('app')
        .controller('cidade.edicao', Controller);

    Controller.$inject = ['$scope','CidadeService', 'EstadoService','$location', '$routeParams'];

    function Controller($scope, CidadeService, EstadoService,$location, $routeParams) {
        $scope.cidade = {Nome: "", EstadoId: "", Id: ""};

        CidadeService.Editar($routeParams.id).then(function(item){
            var data = item.data;
            console.log(data);
            $scope.cidade['Nome'] = data.nome;
            $scope.cidade['EstadoId'] = data.estadoid;
            $scope.cidade['Id'] = data.id;
        });

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
              CidadeService.Atualizar(item).then(function(item){
                $location.path('/cidade');
              }, function(item){
                $scope.errors = [];
                $scope.errors.push(item.data);
              })
            }
        }
    }
})();
