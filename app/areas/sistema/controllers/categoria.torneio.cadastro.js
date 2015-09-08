(function () {
    'use strict';

    angular
        .module('app')
        .controller('categoria.torneio.cadastro', Controller);

    Controller.$inject = ['$scope','CategoriaService'];

    function Controller($scope, CategoriaService) {

      $scope.form = {
        PesoInicial: "",
        PesoFinal: "",
        TorneioId: "",
        IdadeInicial: "",
        IdadeFinal: "",
        Classe: "",
        Divisao: "",
        Descricao: "",
        CategoriaId: ""
      }

      CategoriaService.Listar().then(function(item){
        $scope.categorias = item.data;
        console.log(item);
      })

      $scope.selectCate = function(id){
        CategoriaService.Editar(id).then(function(item){
          item = item.data;
          console.log(item);
          $scope.form.Divisao = item.divisao;
          $scope.form.Classe = item.classe;
          $scope.form.PesoInicial = item.pesoinicial;
          $scope.form.PesoFinal = item.pesofinal;
          $scope.form.IdadeInicial = item.idadeinicial;
          $scope.form.IdadeFinal = item.idadefinal;
        })
      }

    }
})();
