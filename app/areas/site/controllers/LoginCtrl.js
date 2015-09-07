(function () {
    'use strict';

    angular
        .module('app')
        .controller('LoginCtrl', LoginCtrl);

    LoginCtrl.$inject = ['$scope', '$http', 'UsuarioService', '$rootScope', '$window'];

    function LoginCtrl($scope, $http, UsuarioService, $rootScope, $window) {
        var vm = this;
        vm.login = {
            email: "",
            password: ""
        };

        vm.submit = function () {

            $rootScope.isPageBusy = true;
            UsuarioService.login(vm.login)
                .success(success)
                .catch(fail);

            function success(response) {
                $rootScope.isAuthenticated = true;
                $rootScope.token = response.access_token;
                $rootScope.user = {
                    name: "",
                    email: vm.login.email
                };


                localStorage.setItem('token', response.access_token);
                localStorage.setItem('user', angular.toJson($rootScope.user));

                $rootScope.isPageBusy = false;
                $window.location.href = 'sistema.html';
            }

            function fail(error) {
                $rootScope.isPageBusy = false;
                toastr.error(error.data.error_description);
            }
        }
    }
})();
