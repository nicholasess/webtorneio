
(function () {
    'use strict';

    angular
        .module('app')
        .controller('atleta.academia.index', Controller);

    Controller.$inject = ['$scope', '$location', 'AtletaAcademiaService', '$rootScope', 'filterFilter'];

    function Controller($scope, $location, AtletaAcademiaService, $rootScope, filterFilter) {

        $scope.title = 'Cadastro de AtletasAcademia';
        var vm = this;
        vm.atletasacademia = [];
        $rootScope.isPageBusy = true;

        $scope.search = {};

        $scope.resetFilters = function () {
            $scope.search = {};
        };

        ListarAtletasAcademia();


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
            vm.atletasacademiaf = filterFilter(vm.atletasacademia, newVal);
            $scope.totalItems = vm.atletasacademiaf.length;
            $scope.noOfPages = Math.ceil($scope.totalItems / $scope.itemsPerPage);
            $scope.currentPage = 1;

        }, true);


        function ListarAtletasAcademia() {

            var promise = AtletaAcademiaService.Listar();

            promise.then(
               function (result) {
                   $rootScope.isPageBusy = false;
                   vm.atletasacademia = result.data;
                   $scope.totalItems = vm.atletasacademia.length;
                   vm.atletasacademiaf = vm.atletasacademia;
               },
               function (error) {
                   $rootScope.isPageBusy = false;
                   console.log(error);
               });
        }
    }
})();
