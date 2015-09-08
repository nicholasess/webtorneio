
(function () {
    'use strict';

    angular
        .module('app')
        .controller('divisao.edicao', Controller);

    Controller.$inject = ['$scope','DivisaoService', '$location', '$routeParams'];

    function Controller($scope, DivisaoService, $location, $routeParams) {
        $scope.divisao = {Nome: ""};
        $scope.messageError = "";

        DivisaoService.Editar($routeParams.id).then(function(item){
          var data = item.data;
          $scope.divisao['Nome'] = data.nome;
          $scope.divisao['Id'] = data.id;
        });

        $scope.cadastro = function(item){
            if(item.Nome == ""){
              $scope.messageError = "Campo Nome está vázio!";
            }else{
              item.Nome = item.Nome.toUpperCase();
              DivisaoService.Atualizar(item).then(function(item){
                $location.path('/divisao');
              }, function(item){
                $scope.messageError = item.data;
              })
            }
        }
    }
})();
