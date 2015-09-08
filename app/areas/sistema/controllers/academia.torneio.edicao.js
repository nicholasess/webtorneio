
(function () {
    'use strict';

    angular
        .module('app')
        .controller('academia.torneio.edicao', Controller);

    Controller.$inject = ['$scope','$location', 'AcademiaTorneioService', '$routeParams'];

    function Controller($scope, $location, AcademiaTorneioService, $routeParams) {
        $scope.at ={TorneioId:"",AcademiaId:""};

        AcademiaTorneioService.Editar($routeParams.id).then(function(item){
            var data = item.data;

        })

        $scope.cadastro = function(item){
            $scope.errors = [];
            var status = true;
            if(item.TorneioId == ""){
              status = false;
              $scope.errors.push("Campo torneio não está selecionado");
            }

            if(item.AcademiaId == ""){
              status = false;
              $scope.errors.push("Campo academia não está selecionado");
            }

            if(status){
                AcademiaTorneioService.Cadastrar(item).then(function(){
                    $location.path('/academiatorneio');
                })
            }
        }
    }
})();
