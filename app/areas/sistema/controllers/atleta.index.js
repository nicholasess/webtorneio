
(function () {
    'use strict';

    angular
        .module('app')
        .controller('AtletaCtrl', AtletaCtrl);

    AtletaCtrl.$inject = ['$scope', '$location', 'AtletaService', '$rootScope', 'filterFilter'];

    function AtletaCtrl($scope, $location, AtletaService, $rootScope, filterFilter) {

        $scope.title = 'Cadastro de Atletas';
        var vm = this;
        vm.atletas = [];
        $rootScope.isPageBusy = true;

        $scope.search = {};

        $scope.resetFilters = function () {
            $scope.search = {};
        };

        ListarAtletas();


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
            vm.atletasf = filterFilter(vm.atletas, newVal);
            $scope.totalItems = vm.atletasf.length;
            $scope.noOfPages = Math.ceil($scope.totalItems / $scope.itemsPerPage);
            $scope.currentPage = 1;

        }, true);


        function ListarAtletas() {

            var promise = AtletaService.Listar();

            promise.then(
               function (result) {
                   $rootScope.isPageBusy = false;
                   vm.atletas = result.data;
                   $scope.totalItems = vm.atletas.length;
                   vm.atletasf = vm.atletas;
               },
               function (error) {
                   $rootScope.isPageBusy = false;
                   console.log(error);
               });
        }
    }
})();
