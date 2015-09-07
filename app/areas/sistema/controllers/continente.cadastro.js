
(function () {
    'use strict';

    angular
        .module('app')
        .controller('continente.cadastro', Controller);

    Controller.$inject = ['$scope','ContinenteService', '$location'];

    function Controller($scope, ContinenteService, $location) {
        $scope.continente = {Nome: ""};
        $scope.messageError = "";
        $scope.cadastro = function(item){
            if(item.Nome == ""){
              $scope.messageError = "Campo Nome está vázio!";
            }else{
              item.Nome = item.Nome.toUpperCase();
              ContinenteService.Cadastrar(item).then(function(item){
                $location.path('/continente');
              }, function(item){
                $scope.messageError = item.data;
              })
            }
        }
    }
})();
