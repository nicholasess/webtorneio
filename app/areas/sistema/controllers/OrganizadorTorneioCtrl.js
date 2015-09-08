
(function () {
    'use strict';

    angular
        .module('app')
        .controller('OrganizadorTorneioCtrl', OrganizadorTorneioCtrl);

    OrganizadorTorneioCtrl.$inject = ['$scope', '$location', 'OrganizadorTorneioService', '$rootScope', 'filterFilter'];

    function OrganizadorTorneioCtrl($scope, $location, OrganizadorTorneioService, $rootScope, filterFilter) {

        $scope.title = 'Cadastro de OrganizadoresTorneio';
        var vm = this;
        vm.organizadorestorneio = [];
        $rootScope.isPageBusy = true;

        $scope.search = {};

        $scope.resetFilters = function () {
            $scope.search = {};
        };

        ListarOrganizadoresTorneio();


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
            vm.organizadorestorneiof = filterFilter(vm.organizadorestorneio, newVal);
            $scope.totalItems = vm.organizadorestorneiof.length;
            $scope.noOfPages = Math.ceil($scope.totalItems / $scope.itemsPerPage);
            $scope.currentPage = 1;

        }, true);


        function ListarOrganizadoresTorneio() {

            var promise = OrganizadorTorneioService.Listar();

            promise.then(
               function (result) {
                   $rootScope.isPageBusy = false;
                   vm.organizadorestorneio = result.data;
                   $scope.totalItems = vm.organizadorestorneio.length;
                   vm.organizadorestorneiof = vm.organizadorestorneio;
               },
               function (error) {
                   $rootScope.isPageBusy = false;
                   console.log(error);
               });
        }
    }
})();
