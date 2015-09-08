
(function () {
    'use strict';

    angular
        .module('app')
        .controller('pais.index', PaisCtrl);

    PaisCtrl.$inject = ['$scope', '$location', 'PaisService', '$rootScope', 'filterFilter', '$route'];

    function PaisCtrl($scope, $location, PaisService, $rootScope, filterFilter, $route) {

        $scope.title = 'Cadastro de Paises';
        var vm = this;
        vm.paises = [];
        $rootScope.isPageBusy = true;
        $scope.messageError = "";

        $scope.search = {};

        $scope.resetFilters = function () {
            $scope.search = {};
        };

        ListarPaises();


        $scope.itemsPerPage = 10;
        $scope.currentPage = 1;
        $scope.maxSize = 20;

        $scope.deletar = function(item){
          PaisService.Deletar(item).then(function(data){
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
            vm.paisesf = filterFilter(vm.paises, newVal);
            $scope.totalItems = vm.paisesf.length;
            $scope.noOfPages = Math.ceil($scope.totalItems / $scope.itemsPerPage);
            $scope.currentPage = 1;

        }, true);


        function ListarPaises() {

            var promise = PaisService.Listar();

            promise.then(
               function (result) {
                   $rootScope.isPageBusy = false;
                   vm.paises = result.data;
                   $scope.totalItems = vm.paises.length;
                   vm.paisesf = vm.paises;
               },
               function (error) {
                   $rootScope.isPageBusy = false;
                   console.log(error);
               });
        }
    }
})();
