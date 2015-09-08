
(function () {
    'use strict';

    angular
        .module('app')
        .controller('ResponsavelAcademiaCtrl', ResponsavelAcademiaCtrl);

    ResponsavelAcademiaCtrl.$inject = ['$scope', '$location', 'ResponsavelAcademiaService', '$rootScope', 'filterFilter'];

    function ResponsavelAcademiaCtrl($scope, $location, ResponsavelAcademiaService, $rootScope, filterFilter) {

        $scope.title = 'Cadastro de ResponsaveisAcademia';
        var vm = this;
        vm.responsaveisacademia = [];
        $rootScope.isPageBusy = true;

        $scope.search = {};

        $scope.resetFilters = function () {
            $scope.search = {};
        };

        ListarResponsaveisAcademia();


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
            vm.responsaveisacademiaf = filterFilter(vm.responsaveisacademia, newVal);
            $scope.totalItems = vm.responsaveisacademiaf.length;
            $scope.noOfPages = Math.ceil($scope.totalItems / $scope.itemsPerPage);
            $scope.currentPage = 1;

        }, true);


        function ListarResponsaveisAcademia() {

            var promise = ResponsavelAcademiaService.Listar();

            promise.then(
               function (result) {
                   $rootScope.isPageBusy = false;
                   vm.responsaveisacademia = result.data;
                   $scope.totalItems = vm.responsaveisacademia.length;
                   vm.responsaveisacademiaf = vm.responsaveisacademia;
               },
               function (error) {
                   $rootScope.isPageBusy = false;
                   console.log(error);
               });
        }
    }
})();
