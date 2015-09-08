(function () {
    'use strict';

    angular
        .module('app')
        .controller('academia.torneio.index', AcademiaTorneioCtrl);

    AcademiaTorneioCtrl.$inject = ['$scope', '$location', 'AcademiaTorneioService', '$rootScope', 'filterFilter', '$route'];

    function AcademiaTorneioCtrl($scope, $location, AcademiaTorneioService, $rootScope, filterFilter, $route) {

        $scope.title = 'Cadastro de AcademiasTorneio';
        var vm = this;
        vm.academiastorneio = [];
        $rootScope.isPageBusy = true;

        $scope.search = {};

        $scope.resetFilters = function () {
            $scope.search = {};
        };

        ListarAcademiasTorneio();


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
            vm.academiastorneiof = filterFilter(vm.academiastorneio, newVal);
            $scope.totalItems = vm.academiastorneiof.length;
            $scope.noOfPages = Math.ceil($scope.totalItems / $scope.itemsPerPage);
            $scope.currentPage = 1;

        }, true);


        function ListarAcademiasTorneio() {

            var promise = AcademiaTorneioService.Listar();

            promise.then(
               function (result) {
                   $rootScope.isPageBusy = false;
                   vm.academiastorneio = result.data;
                   $scope.totalItems = vm.academiastorneio.length;
                   vm.academiastorneiof = vm.academiastorneio;
               },
               function (error) {
                   $rootScope.isPageBusy = false;
                   console.log(error);
               });
        }
    }
})();
