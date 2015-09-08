
(function () {
    'use strict';

    angular
        .module('app')
        .controller('ValorInscricaoCtrl', ValorInscricaoCtrl);

    ValorInscricaoCtrl.$inject = ['$scope', '$location', 'ValorInscricaoService', '$rootScope', 'filterFilter'];

    function ValorInscricaoCtrl($scope, $location, ValorInscricaoService, $rootScope, filterFilter) {

        $scope.title = 'Cadastro de ValoresInscricao';
        var vm = this;
        vm.valoresinscricao = [];
        $rootScope.isPageBusy = true;

        $scope.search = {};

        $scope.resetFilters = function () {
            $scope.search = {};
        };

        ListarValoresInscricao();


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
            vm.valoresinscricaof = filterFilter(vm.valoresinscricao, newVal);
            $scope.totalItems = vm.valoresinscricaof.length;
            $scope.noOfPages = Math.ceil($scope.totalItems / $scope.itemsPerPage);
            $scope.currentPage = 1;

        }, true);


        function ListarValoresInscricao() {

            var promise = ValorInscricaoService.Listar();

            promise.then(
               function (result) {
                   $rootScope.isPageBusy = false;
                   vm.valoresinscricao = result.data;
                   $scope.totalItems = vm.valoresinscricao.length;
                   vm.valoresinscricaof = vm.valoresinscricao;
               },
               function (error) {
                   $rootScope.isPageBusy = false;
                   console.log(error);
               });
        }
    }
})();
