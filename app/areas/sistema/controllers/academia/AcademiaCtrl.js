
(function () {
    'use strict';

    angular
        .module('app')
        .controller('AcademiaCtrl', AcademiaCtrl);

    AcademiaCtrl.$inject = ['$scope', '$location', 'AcademiaService', '$rootScope', 'filterFilter','$modal'];

    function AcademiaCtrl($scope, $location, AcademiaService, $rootScope, filterFilter, $modal) {

        $scope.title = 'Cadastro de Academias';
        var vm = this;
        vm.academias = [];
        $rootScope.isPageBusy = true;

        $scope.search = {};

        $scope.resetFilters = function () {
            $scope.search = {};
        };

        ListarAcademias();


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
            vm.academiasf = filterFilter(vm.academias, newVal);
            $scope.totalItems = vm.academiasf.length;
            $scope.noOfPages = Math.ceil($scope.totalItems / $scope.itemsPerPage);
            $scope.currentPage = 1;

        }, true);


        function ListarAcademias() {

            var promise = AcademiaService.Listar();

            promise.then(
               function (result) {
                   $rootScope.isPageBusy = false;
                   vm.academias = result.data;
                   $scope.totalItems = vm.academias.length;
                   vm.academiasf = vm.academias;
               },
               function (error) {
                   $rootScope.isPageBusy = false;
                   console.log(error);
               });
        }

        $scope.open = function (academiaId) {
            var modalInstance = $modal.open({
                templateUrl: 'cad_academia',
                controller: $scope.model,
                resolve: {
                    id: function () {
                        return academiaId;
                    }
                }
            });
        };

        $scope.model = function ($scope, $modalInstance, AcademiaService, PaisService,EstadoService, CidadeService, id) {
            vm.academia = {};

            vm.academia.nome = "andré";


            if (angular.isDefined(id))
            {
                
            }
            else
            {
               
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
        };

    }
})();
