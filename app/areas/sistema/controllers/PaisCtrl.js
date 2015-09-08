
(function () {
    'use strict';

    angular
        .module('app')
        .controller('PaisCtrl', PaisCtrl);

    PaisCtrl.$inject = ['$scope', '$location', 'PaisService', '$rootScope', 'filterFilter'];

    function PaisCtrl($scope, $location, PaisService, $rootScope, filterFilter) {

        $scope.title = 'Cadastro de Paises';
        var vm = this;
        vm.paises = [];
        $rootScope.isPageBusy = true;

        $scope.search = {};

        $scope.resetFilters = function () {
            $scope.search = {};
        };

        ListarPaises();


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
