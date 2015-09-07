
(function () {
    'use strict';

    angular
        .module('app')
        .controller('ConfiguracaoCtrl', ConfiguracaoCtrl);

    ConfiguracaoCtrl.$inject = ['$scope', '$location', 'ConfiguracaoService', '$rootScope', 'filterFilter'];

    function ConfiguracaoCtrl($scope, $location, ConfiguracaoService, $rootScope, filterFilter) {

        $scope.title = 'Cadastro de Configuracoes';
        var vm = this;
        vm.configuracoes = [];
        $rootScope.isPageBusy = true;

        $scope.search = {};

        $scope.resetFilters = function () {
            $scope.search = {};
        };

        ListarConfiguracoes();


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
            vm.configuracoesf = filterFilter(vm.configuracoes, newVal);
            $scope.totalItems = vm.configuracoesf.length;
            $scope.noOfPages = Math.ceil($scope.totalItems / $scope.itemsPerPage);
            $scope.currentPage = 1;

        }, true);


        function ListarConfiguracoes() {

            var promise = ConfiguracaoService.Listar();

            promise.then(
               function (result) {
                   $rootScope.isPageBusy = false;
                   vm.configuracoes = result.data;
                   $scope.totalItems = vm.configuracoes.length;
                   vm.configuracoesf = vm.configuracoes;
               },
               function (error) {
                   $rootScope.isPageBusy = false;
                   console.log(error);
               });
        }
    }
})();
