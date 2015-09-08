(function () {
    'use strict';

    angular
        .module('app')
        .controller('academia.cadastro', Controller);

    Controller.$inject = ['$scope','PaisService', 'EstadoService', 'CidadeService','$location', 'AcademiaService'];

    function Controller($scope, PaisService, EstadoService, CidadeService,$location, AcademiaService) {

      $scope.academia = {
        Nome: "",
        Telefone: "",
        Endereco: "",
        PaisId: "",
        EstadoId: "",
        CidadeId: "",
        Bairro: "",
        Numero: "",
        Celular: "",
        Email: "",
        Site: "",
        NomeImg: "",
        Complemento: "",
        Facebook: "",
        Twitter: ""
      }

      $scope.$watch('NomeImg', function(){
         $scope.academia.NomeImg = $scope.NomeImg;
      })

      $scope.cadastro = function(item){
         var status = true;
         var numberRegex = /^\d+$/;
         var emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
         $scope.errors = [];

        if($scope.academia.Nome == ""){
          $scope.errors.push('Campo Nome está vázio');
          status = false;
        }

        if (!numberRegex.test($scope.academia.Telefone)) {
            if ($scope.academia.Telefone != "") {
                $scope.errors.push('Campo Telefone aceita somente números');
                status = false;
            }
        }

        if (!numberRegex.test($scope.academia.Celular)) {
            if ($scope.academia.Celular != "") {
                $scope.errors.push('Campo Celular aceita somente números');
                status = false;
            }
        }

        if($scope.academia.Email == ""){
          $scope.errors.push('Campo Email está vázio');
          status = false;
        }else if(!emailRegex.test($scope.academia.Email)){
          $scope.errors.push('Campo Email aceita somente email válido');
          status = false;
        }

        if($scope.academia.NomeImg == ""){
          $scope.errors.push('Selecione uma imagem');
          status = false;
        }

        if($scope.academia.PaisId == ""){
          $scope.errors.push('Campo Pais não está selecionado');
          status = false;
        }

        if($scope.academia.EstadoId == ""){
          $scope.errors.push('Campo Estado não está selecionado');
          status = false;
        }

        if($scope.academia.CidadeId == ""){
          $scope.errors.push('Campo Cidade não está selecionado');
          status = false;
        }

        if(status){
           AcademiaService.Upload(item, item.NomeImg);
        }

      }

      $scope.mudaPais = function (id) {
           EstadoService.ListarPorPais(id).then(function(item){
               $scope.estados = item.data;
           })
       }

       $scope.mudaEstado = function(id){
          CidadeService.ListarPorEstado(id).then(function(item){
              $scope.cidades = item.data;
           })
       }

       PaisService.Listar().then(function (item) {
           $scope.paises = item.data;
           $scope.academia.PaisId = 3;
           $scope.mudaPais(3);
           $scope.academia.EstadoId = 26;
           $scope.mudaEstado(26);
        })

    }
})();
