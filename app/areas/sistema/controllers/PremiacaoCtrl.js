
(function () {
    'use strict';

    angular
        .module('app')
        .controller('PremiacaoCtrl', PremiacaoCtrl);

    PremiacaoCtrl.$inject = ['$scope', '$location', 'PremiacaoService', '$rootScope', 'filterFilter'];

    function PremiacaoCtrl($scope, $location, PremiacaoService, $rootScope, filterFilter) {

        $scope.title = 'Cadastro de Premiacoes';
        var vm = this;
        vm.premiacoes = [];
        $rootScope.isPageBusy = true;

        $scope.search = {};

        $scope.resetFilters = function () {
            $scope.search = {};
        };

        ListarPremiacoes();


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
            vm.premiacoesf = filterFilter(vm.premiacoes, newVal);
            $scope.totalItems = vm.premiacoesf.length;
            $scope.noOfPages = Math.ceil($scope.totalItems / $scope.itemsPerPage);
            $scope.currentPage = 1;

        }, true);


        function ListarPremiacoes() {

            var promise = PremiacaoService.Listar();

            promise.then(
               function (result) {
                   $rootScope.isPageBusy = false;
                   vm.premiacoes = result.data;
                   $scope.totalItems = vm.premiacoes.length;
                   vm.premiacoesf = vm.premiacoes;
               },
               function (error) {
                   $rootScope.isPageBusy = false;
                   console.log(error);
               });
        }
    }
})();
