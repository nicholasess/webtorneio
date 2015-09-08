(function () {
    'use strict';

    angular
        .module('app')
        .controller('academia.edicao', Controller);

    Controller.$inject = ['$scope', 'PaisService', 'EstadoService', 'CidadeService', '$location', 'AcademiaService', '$routeParams'];

    function Controller($scope, PaisService, EstadoService, CidadeService, $location, AcademiaService, $routeParams) {

        $scope.academia = {
            Id: "",
            Nome: "",
            Telefone: "",
            Endereco: "",
            PaisId: "",
            EstadoId: "",
            CidadeId: "",
            Bairro: "",
            Numero: "",
            Celular: "",
            Email: "",
            Site: "",
            NomeImg: "",
            Complemento: "",
            Facebook: "",
            Twitter: ""
        }

        AcademiaService.Editar($routeParams.id).then(function (item) {
            var data = item.data;

            $scope.academia['Id'] = data.id;
            $scope.academia['Nome'] = data.nome;
            $scope.academia['Telefone'] = data.telefone;
            $scope.academia['Endereco'] = data.endereco;
            $scope.academia['PaisId'] = data.paisid;
            $scope.mudaPais(data.paisid);
            $scope.academia['EstadoId'] = data.estadoid;
            $scope.mudaEstado(data.estadoid);
            $scope.academia['CidadeId'] = data.cidadeid;
            $scope.academia['Bairro'] = data.bairro;
            $scope.academia['Numero'] = data.numero;
            $scope.academia['Complemento'] = data.complemento;
            $scope.academia['Celular'] = data.celular;
            $scope.academia['Email'] = data.email;
            $scope.academia['Site'] = data.site;
            $scope.academia['Facebook'] = data.facebook;
            $scope.academia['Twitter'] = data.twitter;
            $scope.academia['DataCad'] = data.datacad;
            $scope.academia['Ativo'] = data.ativo;
        });


        $scope.cadastro = function (item) {
            var status = true;
            var numberRegex = /^\d+$/;
            var emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
            $scope.errors = [];

            if ($scope.academia.Nome == "") {
                $scope.errors.push('Campo Nome está vázio');
                status = false;
                console.log(AcademiaService)
            }

            if (!numberRegex.test($scope.academia.Telefone)) {
                if ($scope.academia.Telefone != "") {
                    $scope.errors.push('Campo Telefone aceita somente números');
                    status = false;
                }
            }

            if (!numberRegex.test($scope.academia.Celular)) {
                if ($scope.academia.Celular != "") {
                    $scope.errors.push('Campo Celular aceita somente números');
                    status = false;
                }
            }

            if ($scope.academia.Email == "") {
                $scope.errors.push('Campo Email está vázio');
                status = false;
            } else if (!emailRegex.test($scope.academia.Email)) {
                $scope.errors.push('Campo Email aceita somente email válido');
                status = false;
            }

            if ($scope.academia.PaisId == "") {
                $scope.errors.push('Campo Pais não está selecionado');
                status = false;
            }

            if ($scope.academia.EstadoId == "") {
                $scope.errors.push('Campo Estado não está selecionado');
                status = false;
            }

            if ($scope.academia.CidadeId == "") {
                $scope.errors.push('Campo Cidade não está selecionado');
                status = false;
            }

            if (status) {
                AcademiaService.Atualizar(item).then(function (item) {
                    $location.path('/academia');
                }, function (item) {
                    $scope.errors = [];
                    $scope.errors.push(item.data);
                    status = false;
                });
            }

        }



        $scope.mudaPais = function (id) {
            EstadoService.ListarPorPais(id).then(function (item) {
                $scope.estados = item.data;
            })
        }

        $scope.mudaEstado = function (id) {
            CidadeService.ListarPorEstado(id).then(function (item) {
                $scope.cidades = item.data;
            })
        }

        PaisService.Listar().then(function (item) {
            $scope.paises = item.data;
        })

    }
})();
