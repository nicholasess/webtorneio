
(function () {
    'use strict';

    angular
        .module('app')
        .controller('CadastroAcademiaCtrl', CadastroAcademiaCtrl);

    CadastroAcademiaCtrl.$inject = ['$scope', '$location', 'AcademiaService', '$rootScope', 'filterFilter'];

    function CadastroAcademiaCtrl($scope, $location, AcademiaService, $rootScope, filterFilter) {

        $scope.title = 'Cadastro de Academias';
        var vm = this;
        vm.academias = [];
        $rootScope.isPageBusy = true;
        $rootScope.isPageBusy = false;
    }
})();
