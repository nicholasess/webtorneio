(function () {
    'use strict';

    angular
        .module('app')
        .controller('classe.cadastro', Controller);

    Controller.$inject = ['$scope','ClasseService','$location'];

    function Controller($scope, ClasseService,$location) {
        $scope.classe = {Nome: "", IdadeInicial: "", IdadeFinal: ""};

        $scope.cadastro = function(item){
            var reg = /^\d+$/;
            var status = true;
            $scope.errors = [];
            if(item.Nome == ""){
              $scope.errors.push("Campo Sigla está vázio");
              status = false;
            }
            if(item.IdadeInicial == ""){
              $scope.errors.push("Campo Idade Inicial está vázio");
              status = false;
            }else if(!reg.test(item.IdadeInicial)){
              $scope.errors.push("Campo Idade Inicial aceita somente números");
              status = false;
            }else if(item.IdadeInicial < 0 || item.IdadeInicial > 200){
              $scope.errors.push("Campo Idade Inicial aceita números de 0 a 200");
              status = false;
            }
            if(item.IdadeFinal == ""){
              $scope.errors.push("Campo Idade Final está vázio");
              status = false;
            }else if(!reg.test(item.IdadeFinal)){
              $scope.errors.push("Campo Idade Final aceita somente números");
              status = false;
            }else if(item.IdadeFinal < 0 || item.IdadeFinal > 200){
              $scope.errors.push("Campo Idade Final aceita números de 0 a 200");
              status = false;
            }


            if(status){
              if(item.IdadeInicial >= item.IdadeFinal){
                $scope.errors.push("A Idade Inicial precisa ser menor que a Idade Final");
              }else{
                    item.Nome = item.Nome.toUpperCase();
                    ClasseService.Cadastrar(item).then(function(item){
                      $location.path('/classe');
                    }, function(item){
                      $scope.errors = [];
                      $scope.errors.push(item.data);
                    })
              }
            }
        }
    }
})();
