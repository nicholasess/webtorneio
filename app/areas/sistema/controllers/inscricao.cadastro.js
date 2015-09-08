
(function () {
    'use strict';

    angular
        .module('app')
        .controller('inscricao.cadastro', Controller);

    Controller.$inject = ['$scope','ContinenteService', 'PaisService','$location'];

    function Controller($scope, ContinenteService, PaisService,$location) {
        $scope.pais = {
          AtletaAcaId: "",
          Data: "",
          CategoriaId: "",
          Status: "",
          ResponsavelAcaId:"",
          TorneioId: "",
          AtletaPagou: "",
          ResponsavelPagou: "",
          PesoAtleta: "",
          GraduacaoId: "",
          Numero: "",
        };
    }
})();
