(function () {
    'use strict';

    angular
        .module('app')
        .controller('HomeCtrl', HomeCtrl);

    HomeCtrl.$inject = ['$scope', '$location', 'HomeService', '$rootScope', 'filterFilter'];

    function HomeCtrl($scope, $location, HomeService, $rootScope, filterFilter) {

        $scope.title = 'Pagina inicial';
        };

    
})();
