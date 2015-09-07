
(function () {
    'use strict';

    angular
        .module('app')
        .controller('divisao.cadastro', Controller);

    Controller.$inject = ['$scope','DivisaoService', '$location'];

    function Controller($scope, DivisaoService, $location) {
        $scope.divisao = {Nome: ""};
        $scope.messageError = "";
        $scope.cadastro = function(item){
            if(item.Nome == ""){
              $scope.messageError = "Campo Nome está vázio!";
            }else{
              item.Nome = item.Nome.toUpperCase();
              DivisaoService.Cadastrar(item).then(function(item){
                $location.path('/divisao');
              }, function(item){
                $scope.messageError = item.data;
              })
            }
        }
    }
})();
