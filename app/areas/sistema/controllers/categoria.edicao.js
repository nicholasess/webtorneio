
(function () {
    'use strict';

    angular
        .module('app')
        .controller('categoria.edicao', Controller);

    Controller.$inject = ['$scope','ClasseService','DivisaoService','$location','CategoriaService', '$routeParams'];

    function Controller($scope, ClasseService,DivisaoService,$location, CategoriaService, $routeParams) {
        $scope.categoria = {Descricao: "",ClasseId: "", IdadeInicial: "", IdadeFinal: "", DivisaoId: "", PesoInicial: "", PesoFinal: ""};
        $scope.inicial = true;
        $scope.final = true;

        CategoriaService.Editar($routeParams.id).then(function(item){
          console.log(item);
          var data = item.data;
          $scope.categoria['Descricao'] = data.descricao;
          $scope.categoria['ClasseId'] = data.classeid;
          $scope.categoria['IdadeInicial'] = data.idadeinicial;
          $scope.categoria['IdadeFinal'] = data.idadefinal;
          $scope.categoria['DivisaoId'] = data.divisaoid;
          $scope.categoria['PesoInicial'] = data.pesoinicial;
          $scope.categoria['PesoFinal'] = data.pesofinal;
          $scope.categoria['Id'] = data.id;
        }, function(item){
          console.log(item);
        });

        $scope.ListarClasse = function(){
          ClasseService.Listar().then(function(item){
              $scope.classes = item.data;
          })
        }

        $scope.ListarDivisao = function(){
          DivisaoService.Listar().then(function(item){
              $scope.divisoes = item.data;
          })
        }

        $scope.MudarClasse = function(id){
          ClasseService.Edit(id).then(function(item){
              $scope.categoria.IdadeInicial = item.data.idadeinicial;
              $scope.categoria.IdadeFinal = item.data.idadefinal;
              $scope.inicial = false;
              $scope.final = false;
          })
        }

        $scope.ListarClasse();
        $scope.ListarDivisao();

        $scope.cadastro = function(item){
            var reg = /^\d+$/;
            var status = true;
            $scope.errors = [];
            if(item.Descricao == ""){
              $scope.errors.push("Campo Descricao está vázio");
              status = false;
            }
            if(item.ClasseId == ""){
              $scope.errors.push("Campo Classe não está selecionado");
              status = false;
            }
            if(item.DivisaoId == ""){
              $scope.errors.push("Campo Divisao não está selecionado");
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

             if(item.IdadeInicial >= item.IdadeFinal){
                $scope.errors.push("A Idade Inicial precisa ser menor que a Idade Final");
             }

            if(item.PesoInicial == ""){
              $scope.errors.push("Campo Peso Inicial está vázio");
              status = false;
            }else if(!reg.test(item.PesoInicial)){
              $scope.errors.push("Campo Peso Inicial aceita somente números");
              status = false;
            }else if(item.PesoInicial < 0 || item.PesoInicial > 300){
              $scope.errors.push("Campo Peso Inicial aceita números de 0 a 300");
              status = false;
            }
            if(item.PesoFinal == ""){
              $scope.errors.push("Campo Peso Final está vázio");
              status = false;
            }else if(!reg.test(item.PesoFinal)){
              $scope.errors.push("Campo Peso Final aceita somente números");
              status = false;
            }else if(item.PesoFinal < 0 || item.PesoFinal > 300){
              $scope.errors.push("Campo Peso Final aceita números de 0 a 300");
              status = false;
            }

             if(item.PesoInicial >= item.PesoFinal){
                $scope.errors.push("O Peso Inicial precisa ser menor que a Idade Final");
             }

            if(status){
                    item.Descricao = item.Descricao.toUpperCase();
                    CategoriaService.Atualizar(item).then(function(item){
                      $location.path('/categoria');
                    }, function(item){
                      $scope.errors = [];
                      $scope.errors.push(item.data);
                    })
            }
        }
    }
})();
