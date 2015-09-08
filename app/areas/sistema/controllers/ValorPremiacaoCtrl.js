
(function () {
    'use strict';

    angular
        .module('app')
        .controller('ValorPremiacaoCtrl', ValorPremiacaoCtrl);

    ValorPremiacaoCtrl.$inject = ['$scope', '$location', 'ValorPremiacaoService', '$rootScope', 'filterFilter'];

    function ValorPremiacaoCtrl($scope, $location, ValorPremiacaoService, $rootScope, filterFilter) {

        $scope.title = 'Cadastro de ValoresPremiacao';
        var vm = this;
        vm.valorespremiacao = [];
        $rootScope.isPageBusy = true;

        $scope.search = {};

        $scope.resetFilters = function () {
            $scope.search = {};
        };

        ListarValoresPremiacao();


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
            vm.valorespremiacaof = filterFilter(vm.valorespremiacao, newVal);
            $scope.totalItems = vm.valorespremiacaof.length;
            $scope.noOfPages = Math.ceil($scope.totalItems / $scope.itemsPerPage);
            $scope.currentPage = 1;

        }, true);


        function ListarValoresPremiacao() {

            var promise = ValorPremiacaoService.Listar();

            promise.then(
               function (result) {
                   $rootScope.isPageBusy = false;
                   vm.valorespremiacao = result.data;
                   $scope.totalItems = vm.valorespremiacao.length;
                   vm.valorespremiacaof = vm.valorespremiacao;
               },
               function (error) {
                   $rootScope.isPageBusy = false;
                   console.log(error);
               });
        }
    }
})();
