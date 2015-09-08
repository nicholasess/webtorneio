
(function () {
    'use strict';

    angular
        .module('app')
        .controller('inscricao.edicao', Controller);

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
