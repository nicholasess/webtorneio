
(function () {
    'use strict';

    angular
        .module('app')
        .controller('continente.index', Controller);

    Controller.$inject = ['$scope', '$location', 'ContinenteService', '$rootScope', 'filterFilter', '$route'];

    function Controller($scope, $location, ContinenteService, $rootScope, filterFilter, $route) {

        $scope.title = 'Cadastro de Continentes';
        var vm = this;
        vm.continentes = [];
        $rootScope.isPageBusy = true;

        $scope.search = {};

        $scope.resetFilters = function () {
            $scope.search = {};
        };

        ListarContinentes();

        $scope.deletar = function(item){
          ContinenteService.Deletar(item).then(function(data){
              $route.reload();
          }, function(item){
            $scope.messageError = item.data;
          })
        }

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
            vm.continentesf = filterFilter(vm.continentes, newVal);
            $scope.totalItems = vm.continentesf.length;
            $scope.noOfPages = Math.ceil($scope.totalItems / $scope.itemsPerPage);
            $scope.currentPage = 1;

        }, true);


        function ListarContinentes() {

            var promise = ContinenteService.Listar();

            promise.then(
               function (result) {
                   $rootScope.isPageBusy = false;
                   vm.continentes = result.data;
                   $scope.totalItems = vm.continentes.length;
                   vm.continentesf = vm.continentes;
               },
               function (error) {
                   $rootScope.isPageBusy = false;
                   console.log(error);
               });
        }
    }
})();
