
(function () {
    'use strict';

    angular
        .module('app')
        .controller('estado.index', EstadoCtrl);

    EstadoCtrl.$inject = ['$scope', '$location', 'EstadoService', '$rootScope', 'filterFilter', '$route'];

    function EstadoCtrl($scope, $location, EstadoService, $rootScope, filterFilter, $route) {

        $scope.title = 'Cadastro de Estados';
        var vm = this;
        vm.estados = [];
        $rootScope.isPageBusy = true;

        $scope.search = {};

        $scope.resetFilters = function () {
            $scope.search = {};
        };

        ListarEstados();


        $scope.itemsPerPage = 10;
        $scope.currentPage = 1;
        $scope.maxSize = 20;

        $scope.deletar = function(item){
          EstadoService.Deletar(item).then(function(data){
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
            vm.estadosf = filterFilter(vm.estados, newVal);
            $scope.totalItems = vm.estadosf.length;
            $scope.noOfPages = Math.ceil($scope.totalItems / $scope.itemsPerPage);
            $scope.currentPage = 1;

        }, true);


        function ListarEstados() {

            var promise = EstadoService.Listar();

            promise.then(
               function (result) {
                   $rootScope.isPageBusy = false;
                   vm.estados = result.data;
                   $scope.totalItems = vm.estados.length;
                   vm.estadosf = vm.estados;
               },
               function (error) {
                   $rootScope.isPageBusy = false;
                   console.log(error);
               });
        }
    }
})();
