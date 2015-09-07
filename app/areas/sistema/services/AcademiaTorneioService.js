(function () {
    'use strict';

    angular
        .module('app')
        .factory('AcademiaTorneioService', AcademiaTorneioService);

    AcademiaTorneioService.$inject = ['$http', 'APP_SETTINGS','$window'];

    function AcademiaTorneioService($http, APP_SETTINGS,$window) {
        return {
            Listar: function () {
                var token = $window.localStorage.getItem('token');
                return $http.get(APP_SETTINGS.SERVICE_URL + 'api/academiatorneio',{ headers: { 'Authorization': 'Bearer ' + token } });
            }
        }
    }
})();
