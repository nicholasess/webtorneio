(function () {
    'use strict';

    angular.module('app', ['ngRoute'
        , 'ui.bootstrap',
       'ui.utils.masks',
       'ngFileUpload'
    ]);

    angular.module('app').controller('AppCtrl', function AppCtrl($scope, $http) {
        $scope.title = 'Home';

    });

    angular.module('app').constant('APP_SETTINGS', {
        // "SERVICE_URL": "http://localhost:25949/"
        "SERVICE_URL": "http://200.98.146.173/"
    });


	angular.module('app').directive('ngConfirmClick', [
        function(){
            return {
                link: function (scope, element, attr) {
                    var msg = attr.ngConfirmClick || "Are you sure?";
                    var clickAction = attr.confirmedClick;
                    element.bind('click',function (event) {
                        if ( window.confirm(msg) ) {
                            scope.$eval(clickAction)
                        }
                    });
                }
            };
    }]);

    angular.module('app').filter('startFrom', function () {
        return function (input, start) {
            if (input) {
                start = +start;
                return input.slice(start);
            }
            return [];
        };
    });

    angular.module('app').run(function ($rootScope, $location, UsuarioService, $window) {

        $rootScope.isPageBusy = false;
        $rootScope.reLogin = reLogin();
        $rootScope.logout = function () {
            logout();
            localStorage.setItem('token', '');
            localStorage.setItem('user', '');
            $window.location.href = 'index.html';
        };

        logout();
        reLogin();



        function logout() {
            $rootScope.isAuthenticated = false;
            $rootScope.token = "";
            $rootScope.user = {
                name: "",
                email: ""
            };


        };

        function reLogin() {

            var token = localStorage.getItem('token');
            if (token != '' && token != null && token != undefined && token != 'undefined') {


                $rootScope.token = token;
                $rootScope.user = angular.fromJson(localStorage.getItem('user'));
                $rootScope.isAuthenticated = true;
                getUserInfo();
            }


        };

        function getUserInfo() {
            UsuarioService.getInfo()
                .success(success)
                .catch(fail);

            function success(response) {

                $rootScope.user = {
                    nome: response.nome,
                    email: response.email
                };

                localStorage.setItem('user', angular.toJson($rootScope.user));
            }

            function fail(error) {

                if (error.status == 401) {
                    toastr.error("Sua sessão expirou");
                    $rootScope.logout();
                } else {
                    toastr.error(error.data.error);
                }
            }
        };

        $rootScope.$on("$routeChangeStart", function (event, next, current) {
            if (next.authorize && !$rootScope.isAuthenticated) {
                $window.location.href = 'index.html';
            }
        });
    });


})();