
(function () {
    'use strict';

    angular
        .module('app')
        .controller('organizador.torneio.edicao', Controller);

    Controller.$inject = ['$scope','$location', 'OrganizadorTorneioService'];

    function Controller($scope, $location, OrganizadorTorneioService) {
        $scope.ot ={TorneioId:"",ResAcaId:""};

        $scope.cadastro = function(item){
            var status = true;
            if(item.TorneioId == ""){
              status = false;
            }

            if(item.ResAcaId == ""){
              status = false;
            }

            if(status){

            }
        }
    }
})();
