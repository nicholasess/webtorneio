
(function () {
    'use strict';

    angular
        .module('app')
        .controller('academia.torneio.cadastro', Controller);

    Controller.$inject = ['$scope','$location', 'AcademiaTorneioService'];

    function Controller($scope, $location, AcademiaTorneioService) {
        $scope.at ={TorneioId:"",AcademiaId:""};

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
