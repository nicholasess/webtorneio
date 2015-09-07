
(function () {
    'use strict';

    angular
        .module('app')
        .controller('ResponsavelCtrl', ResponsavelCtrl);

    ResponsavelCtrl.$inject = ['$scope', '$location', 'ResponsavelService', '$rootScope', 'filterFilter'];

    function ResponsavelCtrl($scope, $location, ResponsavelService, $rootScope, filterFilter) {

        $scope.title = 'Cadastro de Responsaveis';
        var vm = this;
        vm.responsaveis = [];
        $rootScope.isPageBusy = true;

        $scope.search = {};

        $scope.resetFilters = function () {
            $scope.search = {};
        };

        ListarResponsaveis();


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
            vm.responsaveisf = filterFilter(vm.responsaveis, newVal);
            $scope.totalItems = vm.responsaveisf.length;
            $scope.noOfPages = Math.ceil($scope.totalItems / $scope.itemsPerPage);
            $scope.currentPage = 1;

        }, true);


        function ListarResponsaveis() {

            var promise = ResponsavelService.Listar();

            promise.then(
               function (result) {
                   $rootScope.isPageBusy = false;
                   vm.responsaveis = result.data;
                   $scope.totalItems = vm.responsaveis.length;
                   vm.responsaveisf = vm.responsaveis;
               },
               function (error) {
                   $rootScope.isPageBusy = false;
                   console.log(error);
               });
        }
    }
})();
