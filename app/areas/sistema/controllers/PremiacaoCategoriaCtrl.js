
(function () {
    'use strict';

    angular
        .module('app')
        .controller('PremiacaoCategoriaCtrl', PremiacaoCategoriaCtrl);

    PremiacaoCategoriaCtrl.$inject = ['$scope', '$location', 'PremiacaoCategoriaService', '$rootScope', 'filterFilter'];

    function PremiacaoCategoriaCtrl($scope, $location, PremiacaoCategoriaService, $rootScope, filterFilter) {

        $scope.title = 'Cadastro de PremiacoesCategoria';
        var vm = this;
        vm.premiacoescategoria = [];
        $rootScope.isPageBusy = true;

        $scope.search = {};

        $scope.resetFilters = function () {
            $scope.search = {};
        };

        ListarPremiacoesCategoria();


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
            vm.premiacoescategoriaf = filterFilter(vm.premiacoescategoria, newVal);
            $scope.totalItems = vm.premiacoescategoriaf.length;
            $scope.noOfPages = Math.ceil($scope.totalItems / $scope.itemsPerPage);
            $scope.currentPage = 1;

        }, true);


        function ListarPremiacoesCategoria() {

            var promise = PremiacaoCategoriaService.Listar();

            promise.then(
               function (result) {
                   $rootScope.isPageBusy = false;
                   vm.premiacoescategoria = result.data;
                   $scope.totalItems = vm.premiacoescategoria.length;
                   vm.premiacoescategoriaf = vm.premiacoescategoria;
               },
               function (error) {
                   $rootScope.isPageBusy = false;
                   console.log(error);
               });
        }
    }
})();
