
(function () {
    'use strict';

    angular
        .module('app')
        .controller('CidadeCtrl', CidadeCtrl);

    CidadeCtrl.$inject = ['$scope', '$location', 'CidadeService', 'EstadoService', '$rootScope', 'filterFilter', '$modal'];

    function CidadeCtrl($scope, $location, CidadeService, EstadoService, $rootScope, filterFilter,$modal) {

        $scope.title = 'Cadastro de Cidades';
        var vm = this;
        vm.cidades = [];
        $rootScope.isPageBusy = true;
        $scope.search = {};
        
        $scope.resetFilters = function () {
            $scope.search = {};
        };

        ListarCidades();


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
            vm.cidadesf = filterFilter(vm.cidades, newVal);
            $scope.totalItems = vm.cidadesf.length;
            $scope.noOfPages = Math.ceil($scope.totalItems / $scope.itemsPerPage);
            $scope.currentPage = 1;

        }, true);


        function ListarCidades() {

            var promise = CidadeService.Listar();

            promise.then(
               function (result) {
                   $rootScope.isPageBusy = false;
                   vm.cidades = result.data;
                   $scope.totalItems = vm.cidades.length;
                   vm.cidadesf = vm.cidades;
               },
               function (error) {
                   $rootScope.isPageBusy = false;
                   console.log(error);
               });
        }

        $scope.open = function (cidadeId) {
            var modalInstance = $modal.open({
                templateUrl: 'cad_cidade',
                controller: $scope.model,
                resolve: {
                    id: function () {
                        return cidadeId;
                    }
                }
            });
        };

        $scope.model = function ($scope, $modalInstance, CidadeService,EstadoService, id) {
            vm.cidade = {};
            vm.estados = [];

            ListarEstados();

            if (angular.isDefined(id)) {

            }
            else {

            }
            // close modal
            $scope.cancel = function () {
                $modalInstance.dismiss('cancel');
            };
            // Add new user
            $scope.add = function () {
                //AcademiaService.Adicionar
                $modalInstance.dismiss('cancel');
            };
            // Save edited user.
            $scope.save = function () {
                //AcademiaService.Alterar
                $modalInstance.dismiss('cancel');
            };

            function ListarEstados() {
                var promise =
                    EstadoService.Listar();

                promise.then(
                   function (result) {
                       vm.estados = result.data
                       vm.cidade.estadoid = vm.estados[0].id;
                   },
                   function (error) {
                       console.log(error);
                   });
            }
        };
    }
})();
