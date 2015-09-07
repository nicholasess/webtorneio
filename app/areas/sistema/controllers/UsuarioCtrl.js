
(function () {
    'use strict';

    angular
        .module('app')
        .controller('UsuarioCtrl', UsuarioCtrl);

    UsuarioCtrl.$inject = ['$scope', '$location', 'UsuarioService', '$rootScope', 'filterFilter'];

    function UsuarioCtrl($scope, $location, UsuarioService, $rootScope, filterFilter) {

        $scope.title = 'Cadastro de Usuarios';
        var vm = this;
        vm.usuarios = [];
        $rootScope.isPageBusy = true;

        $scope.search = {};

        $scope.resetFilters = function () {
            $scope.search = {};
        };

        ListarUsuarios();


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
            vm.usuariosf = filterFilter(vm.usuarios, newVal);
            $scope.totalItems = vm.usuariosf.length;
            $scope.noOfPages = Math.ceil($scope.totalItems / $scope.itemsPerPage);
            $scope.currentPage = 1;

        }, true);


        function ListarUsuarios() {

            var promise = UsuarioService.Listar();

            promise.then(
               function (result) {
                   $rootScope.isPageBusy = false;
                   vm.usuarios = result.data;
                   $scope.totalItems = vm.usuarios.length;
                   vm.usuariosf = vm.usuarios;
               },
               function (error) {
                   $rootScope.isPageBusy = false;
                   console.log(error);
               });
        }
    }
})();
