
(function () {
    'use strict';

    angular
        .module('app')
        .controller('graduacao.edicao', Controller);

    Controller.$inject = ['$scope','GraduacaoService', '$location', '$routeParams'];

    function Controller($scope, GraduacaoService, $location, $routeParams) {
        $scope.graduacao = {Nome: ""};
        $scope.messageError = "";

        GraduacaoService.Editar($routeParams.id).then(function(item){
          var data = item.data;
          $scope.graduacao['Nome'] = data.nome;
          $scope.graduacao['Id'] = data.id;
        });

        $scope.cadastro = function(item){
            if(item.Nome == ""){
              $scope.messageError = "Campo Nome está vázio!";
            }else{
              item.Nome = item.Nome.toUpperCase();
              GraduacaoService.Atualizar(item).then(function(item){
                $location.path('/graduacao');
              }, function(item){
                $scope.messageError = item.data;
              })
            }
        }
    }
})();
