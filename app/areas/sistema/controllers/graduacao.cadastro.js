
(function () {
    'use strict';

    angular
        .module('app')
        .controller('graduacao.cadastro', Controller);

    Controller.$inject = ['$scope','GraduacaoService', '$location'];

    function Controller($scope, GraduacaoService, $location) {
        $scope.graduacao = {Nome: ""};
        $scope.messageError = "";
        $scope.cadastro = function(item){
            if(item.Nome == ""){
              $scope.messageError = "Campo Nome está vázio!";
            }else{
              item.Nome = item.Nome.toUpperCase();
              GraduacaoService.Cadastrar(item).then(function(item){
                $location.path('/graduacao');
              }, function(item){
                $scope.messageError = item.data;
              })
            }
        }
    }
})();
