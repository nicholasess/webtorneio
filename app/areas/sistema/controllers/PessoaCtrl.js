
(function () {
    'use strict';

    angular
        .module('app')
        .controller('PessoaCtrl', PessoaCtrl);

    PessoaCtrl.$inject = ['$scope', '$location', 'PessoaService', '$rootScope', 'filterFilter'];

    function PessoaCtrl($scope, $location, PessoaService, $rootScope, filterFilter) {

        $scope.title = 'Cadastro de Pessoas';
        var vm = this;
        vm.pessoas = [];
        $rootScope.isPageBusy = true;

        $scope.search = {};

        $scope.resetFilters = function () {
            $scope.search = {};
        };

        ListarPessoas();


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
            vm.pessoasf = filterFilter(vm.pessoas, newVal);
            $scope.totalItems = vm.pessoasf.length;
            $scope.noOfPages = Math.ceil($scope.totalItems / $scope.itemsPerPage);
            $scope.currentPage = 1;

        }, true);


        function ListarPessoas() {

            var promise = PessoaService.Listar();

            promise.then(
               function (result) {
                   $rootScope.isPageBusy = false;
                   vm.pessoas = result.data;
                   $scope.totalItems = vm.pessoas.length;
                   vm.pessoasf = vm.pessoas;
               },
               function (error) {
                   $rootScope.isPageBusy = false;
                   console.log(error);
               });
        }
    }
})();
