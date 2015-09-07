
(function () {
    'use strict';

    angular
        .module('app')
        .controller('cidade.index', Controller);

    Controller.$inject = ['$scope', '$location', 'CidadeService', '$rootScope', 'filterFilter', '$route'];

    function Controller($scope, $location, CidadeService, $rootScope, filterFilter, $route) {

        $scope.title = 'Cadastro de Cidades';
        var vm = this;
        vm.cidades = [];
        $rootScope.isPageBusy = true;
        $scope.search = {};

        $scope.resetFilters = function () {
            $scope.search = {};
        };

        ListarCidades();

        $scope.deletar = function(item){
          CidadeService.Deletar(item).then(function(data){
              $route.reload();
          }, function(item){
            $scope.messageError = item.data;
          })
        }

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
            vm.cidadesf = filterFilter(vm.cidades, newVal);
            $scope.totalItems = vm.cidadesf.length;
            $scope.noOfPages = Math.ceil($scope.totalItems / $scope.itemsPerPage);
            $scope.currentPage = 1;

        }, true);


        function ListarCidades() {

            var promise = CidadeService.Listar();

            promise.then(
               function (result) {
                   $rootScope.isPageBusy = false;
                   vm.cidades = result.data;
                   $scope.totalItems = vm.cidades.length;
                   vm.cidadesf = vm.cidades;
               },
               function (error) {
                   $rootScope.isPageBusy = false;
                   console.log(error);
               });
        }
    }
})();
