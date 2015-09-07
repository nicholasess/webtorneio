
(function () {
    'use strict';

    angular
        .module('app')
        .controller('pais.cadastro', Controller);

    Controller.$inject = ['$scope','ContinenteService', 'PaisService','$location'];

    function Controller($scope, ContinenteService, PaisService,$location) {
        $scope.pais = {Nome: "", ContinenteId: "", CodigoArea: ""};
        $scope.messageError = "";

        $scope.ListarContinentes = function() {

            var promise = ContinenteService.Listar();

            promise.then(
               function (result) {
                console.log(result.data);
                   $scope.continentes = result.data;
               });
        }

        $scope.ListarContinentes();

        $scope.cadastro = function(item){
            var reg = /^\d+$/;
            var status = true;
            $scope.errors = [];
            if(item.Nome == ""){
              $scope.errors.push("Campo Nome está vázio");
              status = false;
            }
            if(item.ContinenteId == ""){
              $scope.errors.push("Campo Continente não foi selecionado");
              status = false;
            }

            if(item.CodigoArea == ""){
              $scope.errors.push("Campo Area está vázio");
              status = false;
            }else if(!reg.test(item.CodigoArea)){
              $scope.errors.push("Campo Area aceita somente numeros");
              status = false;
            }

            if(status){
              item.Nome = item.Nome.toUpperCase();
              PaisService.Cadastrar(item).then(function(item){
                $location.path('/pais');
              }, function(item){
                $scope.errors = [];
                $scope.errors.push(item.data);
              })
            }
        }
    }
})();
