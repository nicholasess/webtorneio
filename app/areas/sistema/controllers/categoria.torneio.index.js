
(function () {
    'use strict';

    angular
        .module('app')
        .controller('categoria.torneio.index', CategoriaTorneioCtrl);

    CategoriaTorneioCtrl.$inject = ['$scope', '$location', 'CategoriaTorneioService', '$rootScope', 'filterFilter'];

    function CategoriaTorneioCtrl($scope, $location, CategoriaTorneioService, $rootScope, filterFilter) {

        $scope.title = 'Cadastro de CategoriasTorneio';
        var vm = this;
        vm.categoriastorneio = [];
        $rootScope.isPageBusy = true;

        $scope.search = {};

        $scope.resetFilters = function () {
            $scope.search = {};
        };

        ListarCategoriasTorneio();


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
            vm.categoriastorneiof = filterFilter(vm.categoriastorneio, newVal);
            $scope.totalItems = vm.categoriastorneiof.length;
            $scope.noOfPages = Math.ceil($scope.totalItems / $scope.itemsPerPage);
            $scope.currentPage = 1;

        }, true);


        function ListarCategoriasTorneio() {

            var promise = CategoriaTorneioService.Listar();

            promise.then(
               function (result) {
                   $rootScope.isPageBusy = false;
                   vm.categoriastorneio = result.data;
                   $scope.totalItems = vm.categoriastorneio.length;
                   vm.categoriastorneiof = vm.categoriastorneio;
               },
               function (error) {
                   $rootScope.isPageBusy = false;
                   console.log(error);
               });
        }
    }
})();
