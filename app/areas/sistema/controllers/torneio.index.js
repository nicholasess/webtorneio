
(function () {
    'use strict';

    angular
        .module('app')
        .controller('torneio.index', TorneioCtrl);

    TorneioCtrl.$inject = ['$scope', '$location', 'TorneioService', '$rootScope', 'filterFilter'];

    function TorneioCtrl($scope, $location, TorneioService, $rootScope, filterFilter) {

        $scope.title = 'Cadastro de Torneios';
        var vm = this;
        vm.torneios = [];
        $rootScope.isPageBusy = true;

        $scope.search = {};

        $scope.resetFilters = function () {
            $scope.search = {};
        };

        ListarTorneios();


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
            vm.torneiosf = filterFilter(vm.torneios, newVal);
            $scope.totalItems = vm.torneiosf.length;
            $scope.noOfPages = Math.ceil($scope.totalItems / $scope.itemsPerPage);
            $scope.currentPage = 1;

        }, true);


        function ListarTorneios() {

            var promise = TorneioService.Listar();

            promise.then(
               function (result) {
                   $rootScope.isPageBusy = false;
                   vm.torneios = result.data;
                   $scope.totalItems = vm.torneios.length;
                   vm.torneiosf = vm.torneios;
               },
               function (error) {
                   $rootScope.isPageBusy = false;
                   console.log(error);
               });
        }
    }
})();
