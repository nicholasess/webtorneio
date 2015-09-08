
(function () {
    'use strict';

    angular
        .module('app')
        .controller('continente.edicao', Controller);

    Controller.$inject = ['$scope','ContinenteService', '$location', '$routeParams'];

    function Controller($scope, ContinenteService, $location, $routeParams) {
        $scope.continente = {Nome: "", Id: ""};
        $scope.messageError = "";

        console.log($routeParams);

        ContinenteService.Editar($routeParams.id).then(function(item){
          $scope.continente.Nome = item.data.nome;
          $scope.continente.Id = item.data.id;
        });

        $scope.atualizacao = function(item){
            if(item.Nome == ""){
              $scope.messageError = "Campo Nome está vázio!";
            }else{
              item.Nome = item.Nome.toUpperCase();
              ContinenteService.Atualizar(item).then(function(item){
                $location.path('/continente');
              }, function(item){
                $scope.messageError = item.data;
              })
            }
        }
    }
})();
