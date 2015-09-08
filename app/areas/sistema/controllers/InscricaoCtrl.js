
(function () {
    'use strict';

    angular
        .module('app')
        .controller('InscricaoCtrl', InscricaoCtrl);

    InscricaoCtrl.$inject = ['$scope', '$location', 'InscricaoService', '$rootScope', 'filterFilter'];

    function InscricaoCtrl($scope, $location, InscricaoService, $rootScope, filterFilter) {

        $scope.title = 'Cadastro de Inscricoes';
        var vm = this;
        vm.inscricoes = [];
        $rootScope.isPageBusy = true;

        $scope.search = {};

        $scope.resetFilters = function () {
            $scope.search = {};
        };

        ListarInscricoes();


        $scope.itemsPerPage = 10;
        $scope.currentPage = 1;
        $scope.maxSize = 20;
      


        $rootScope.setPage = function (pageNo) {
            $scope.currentPage = pageNo;
        };

        $scope.pageChanged = function () {
            console.log('Pagina mudada para : ' + $scope.currentPage);
        };

        $scope.$watch('search', function (newVal, oldVal) {
            vm.inscricoesf = filterFilter(vm.inscricoes, newVal);
            $scope.totalItems = vm.inscricoesf.length;
            $scope.noOfPages = Math.ceil($scope.totalItems / $scope.itemsPerPage);
            $scope.currentPage = 1;

        }, true);


        function ListarInscricoes() {

            var promise = InscricaoService.Listar();

            promise.then(
               function (result) {
                   $rootScope.isPageBusy = false;
                   vm.inscricoes = result.data;
                   $scope.totalItems = vm.inscricoes.length;
                   vm.inscricoesf = vm.inscricoes;
               },
               function (error) {
                   $rootScope.isPageBusy = false;
                   console.log(error);
               });
        }
    }
})();
