(function () {
    'use strict';

    angular
        .module('app')
        .controller('torneio.cadastro', Controller);

    Controller.$inject = ['$scope','PaisService', 'EstadoService', 'CidadeService','$location', 'AcademiaService'];

    function Controller($scope, PaisService, EstadoService, CidadeService,$location, AcademiaService) {

      $scope.torneio = {
        Local: "local",
        Referencia: "referencia",
        Descricao: "descricao",
        InscInicial: "inscrição inicial",
        InscFinal: "inscrição final",
        Status: "status",
        Endereco: "endereço",
        PaisId: "",
        EstadoId: "",
        CidadeId: "",
        Bairro: "bairro",
        Numero: "11",
        NomeImg: "",
        Complemento: "casa",
        Aberto: "aberto",
        SemTaxa: "SemTaxa"
      }

      $scope.status = [{descricao: "Em digitação", id: 0},{descricao: "Em andamento", id: 1},{descricao: "Cancelado", id: 9}, {descricao: "Intorropido", id: 10}];
      $scope.aberto = [{descricao: "Sim", id: true},{descricao: "Não", id: false}]
      $scope.taxa = [{descricao: "Sim", id: true},{descricao: "Não", id: false}]

      console.log($scope.status);

      $scope.cadastro = function(item){
         var status = true;
         var numberRegex = /^\d+$/;
         var emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
         $scope.errors = [];

        if($scope.academia.Complemento == ""){
          $scope.errors.push('Campo Complemento está vázio');
          status = false;
        }

        if($scope.academia.Bairro == ""){
          $scope.errors.push('Campo Bairro está vázio');
          status = false;
        }

        if($scope.academia.Endereco == ""){
          $scope.errors.push('Campo Endereço está vázio');
          status = false;
        }
        if($scope.academia.Numero == ""){
          $scope.errors.push('Campo Numero está vázio');
          status = false;
        }else if(!numberRegex.test($scope.academia.Numero)){
          $scope.errors.push('Campo Numero aceita somente números');
          status = false;
        }

        if($scope.academia.Site == ""){
          $scope.errors.push('Campo Site está vázio');
          status = false;
        }

        if($scope.academia.Facebook == ""){
          $scope.errors.push('Campo Facebook está vázio');
          status = false;
        }

        if($scope.academia.Twitter == ""){
          $scope.errors.push('Campo Twitter está vázio');
          status = false;
        }

        if($scope.academia.Email == ""){
          $scope.errors.push('Campo Email está vázio');
          status = false;
        }else if(!emailRegex.test($scope.academia.Email)){
          $scope.errors.push('Campo Email aceita somente email válido');
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
          AcademiaService.Cadastrar(item).then(function(item){
            $location.path('/academia');
          }, function(item){
            $scope.errors = [];
            $scope.errors.push('Campo Cidade não está selecionado');
             status = false;
          });
        }

      }



       $scope.mudaPais = function(id){
           EstadoService.ListarPorPais(id).then(function(item){
               $scope.estados = item.data;
           })
       }

       $scope.mudaEstado = function(id){
          CidadeService.ListarPorEstado(id).then(function(item){
               $scope.cidades = item.data;
           })
       }

        PaisService.Listar().then(function(item){
          $scope.paises = item.data;
        })

    }
})();
