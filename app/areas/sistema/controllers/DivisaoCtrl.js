
(function () {
    'use strict';

    angular
        .module('app')
        .controller('DivisaoCtrl', DivisaoCtrl);

    DivisaoCtrl.$inject = ['$scope', '$location', 'DivisaoService', '$rootScope', 'filterFilter'];

    function DivisaoCtrl($scope, $location, DivisaoService, $rootScope, filterFilter) {

        $scope.title = 'Cadastro de Divisoes';
        var vm = this;
        vm.divisoes = [];
        $rootScope.isPageBusy = true;

        $scope.search = {};

        $scope.resetFilters = function () {
            $scope.search = {};
        };

        ListarDivisoes();


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
            vm.divisoesf = filterFilter(vm.divisoes, newVal);
            $scope.totalItems = vm.divisoesf.length;
            $scope.noOfPages = Math.ceil($scope.totalItems / $scope.itemsPerPage);
            $scope.currentPage = 1;

        }, true);


        function ListarDivisoes() {

            var promise = DivisaoService.Listar();

            promise.then(
               function (result) {
                   $rootScope.isPageBusy = false;
                   vm.divisoes = result.data;
                   $scope.totalItems = vm.divisoes.length;
                   vm.divisoesf = vm.divisoes;
               },
               function (error) {
                   $rootScope.isPageBusy = false;
                   console.log(error);
               });
        }
    }
})();
