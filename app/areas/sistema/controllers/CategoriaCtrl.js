
(function () {
    'use strict';

    angular
        .module('app')
        .controller('CategoriaCtrl', CategoriaCtrl);

    CategoriaCtrl.$inject = ['$scope', '$location', 'CategoriaService', '$rootScope', 'filterFilter'];

    function CategoriaCtrl($scope, $location, CategoriaService, $rootScope, filterFilter) {

        $scope.title = 'Cadastro de Categorias';
        var vm = this;
        vm.categorias = [];
        $rootScope.isPageBusy = true;

        $scope.search = {};

        $scope.resetFilters = function () {
            $scope.search = {};
        };

        ListarCategorias();


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
            vm.categoriasf = filterFilter(vm.categorias, newVal);
            $scope.totalItems = vm.categoriasf.length;
            $scope.noOfPages = Math.ceil($scope.totalItems / $scope.itemsPerPage);
            $scope.currentPage = 1;

        }, true);


        function ListarCategorias() {

            var promise = CategoriaService.Listar();

            promise.then(
               function (result) {
                   $rootScope.isPageBusy = false;
                   vm.categorias = result.data;
                   $scope.totalItems = vm.categorias.length;
                   vm.categoriasf = vm.categorias;
               },
               function (error) {
                   $rootScope.isPageBusy = false;
                   console.log(error);
               });
        }
    }
})();
