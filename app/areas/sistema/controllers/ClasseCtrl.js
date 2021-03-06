
(function () {
    'use strict';

    angular
        .module('app')
        .controller('ClasseCtrl', ClasseCtrl);

    ClasseCtrl.$inject = ['$scope', '$location', 'ClasseService', '$rootScope', 'filterFilter'];

    function ClasseCtrl($scope, $location, ClasseService, $rootScope, filterFilter) {

        $scope.title = 'Cadastro de Classes';
        var vm = this;
        vm.classes = [];
        $rootScope.isPageBusy = true;

        $scope.search = {};

        $scope.resetFilters = function () {
            $scope.search = {};
        };

        ListarClasses();


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
            vm.classesf = filterFilter(vm.classes, newVal);
            $scope.totalItems = vm.classesf.length;
            $scope.noOfPages = Math.ceil($scope.totalItems / $scope.itemsPerPage);
            $scope.currentPage = 1;

        }, true);


        function ListarClasses() {

            var promise = ClasseService.Listar();

            promise.then(
               function (result) {
                   $rootScope.isPageBusy = false;
                   vm.classes = result.data;
                   $scope.totalItems = vm.classes.length;
                   vm.classesf = vm.classes;
               },
               function (error) {
                   $rootScope.isPageBusy = false;
                   console.log(error);
               });
        }
    }
})();
