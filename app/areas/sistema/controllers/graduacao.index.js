
(function () {
    'use strict';

    angular
        .module('app')
        .controller('graduacao.index', GraduacaoCtrl);

    GraduacaoCtrl.$inject = ['$scope', '$location', 'GraduacaoService', '$rootScope', 'filterFilter', '$route'];

    function GraduacaoCtrl($scope, $location, GraduacaoService, $rootScope, filterFilter, $route) {

        $scope.title = 'Cadastro de Graduacoes';
        var vm = this;
        vm.graduacoes = [];
        $rootScope.isPageBusy = true;

        $scope.search = {};

        $scope.resetFilters = function () {
            $scope.search = {};
        };

        ListarGraduacoes();


        $scope.itemsPerPage = 10;
        $scope.currentPage = 1;
        $scope.maxSize = 20;

        $scope.deletar = function(item){
          GraduacaoService.Deletar(item).then(function(data){
              $route.reload();
          }, function(item){
            $scope.messageError = item.data;
          })
        }

        $rootScope.setPage = function (pageNo) {
            $scope.currentPage = pageNo;
        };

        $scope.pageChanged = function () {
            console.log('Pagina mudada para : ' + $scope.currentPage);
        };

        $scope.$watch('search', function (newVal, oldVal) {
            vm.graduacoesf = filterFilter(vm.graduacoes, newVal);
            $scope.totalItems = vm.graduacoesf.length;
            $scope.noOfPages = Math.ceil($scope.totalItems / $scope.itemsPerPage);
            $scope.currentPage = 1;

        }, true);


        function ListarGraduacoes() {

            var promise = GraduacaoService.Listar();

            promise.then(
               function (result) {
                   $rootScope.isPageBusy = false;
                   vm.graduacoes = result.data;
                   $scope.totalItems = vm.graduacoes.length;
                   vm.graduacoesf = vm.graduacoes;
               },
               function (error) {
                   $rootScope.isPageBusy = false;
                   console.log(error);
               });
        }
    }
})();
