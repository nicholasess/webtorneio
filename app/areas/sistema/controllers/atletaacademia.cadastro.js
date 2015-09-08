(function () {
    'use strict';

    angular
        .module('app')
        .controller('atletaacademia.cadastro', Controller);

    Controller.$inject = ['$scope', 'PaisService', 'EstadoService', 'CidadeService', '$location', 'AcademiaService', 'GraduacaoService','AtletaAcademiaService'];

    function Controller($scope, PaisService, EstadoService, CidadeService, $location, AcademiaService, GraduacaoService , AtletaAcademiaService) {
        $scope.atletaacademia = {
            id: "",
            academiaid: "",
            atletaid: "",
            atleta: {
                Nome: "",
                DataNasc: "",
                usuario : { Email: ""},
                Sexo: "M",
                EResponsavel : "False",
                Endereco: "",
                Bairro: "",
                Telefone: "",
                Celular: "",
                Numero: "",
                PaisId: "",
                EstadoId: "",
                CidadeId: "",
                UsuarioId: "",
                Ativo: "",
                NomeImg: "",
                NomeIdent: "",
                DataCad: "",
                Facebook: "",
                Twitter: "",
                Complemento: "",
                Peso: "0",
                Identidade: "",
                GraduacaoId: ""
            }
        }

        $scope.cadastro = function (item) {
            var status = true;
            var numberRegex = /^\d+$/;
            var emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
            $scope.errors = [];

            if ($scope.atletaacademia.atleta.Nome == "") {
                $scope.errors.push('Campo Nome está vázio');
                status = false;
                console.log(AtletaAcademiaService)
            }

            if ($scope.atletaacademia.atleta.Telefone != "") {
                if (!numberRegex.test($scope.atletaacademia.atleta.Telefone)) {
                    $scope.errors.push('Campo telefone aceita somente números');
                    status = false;
                }
            }


            if ($scope.atletaacademia.atleta.Celular != "") {
                if (!numberRegex.test($scope.atletaacademia.atleta.Celular)) {
                    $scope.errors.push('Campo celular aceita somente números');
                    status = false;
                }
            }
            
            /*
            if ($scope.atletaacademia.atleta.usuario.Email == "") {
                $scope.errors.push('Campo Email está vázio');
                status = false;
            } else if (!emailRegex.test($scope.atletaacademia.usuario.atleta.Email)) {
                $scope.errors.push('Campo Email aceita somente email válido');
                status = false;
            }*/

            if ($scope.atletaacademia.atleta.PaisId == "") {
                $scope.errors.push('Campo Pais não está selecionado');
                status = false;
            }


            if ($scope.atletaacademia.atleta.EstadoId == "") {
                $scope.errors.push('Campo Estado não está selecionado');
                status = false;
            }


            if ($scope.atletaacademia.atleta.CidadeId == "") {
                $scope.errors.push('Campo Cidade não está selecionado');
                status = false;
            }

            if (status) {
               
                AtletaAcademiaService.Cadastrar(item).then(function (item) {
                    $location.path('/atletaacademia');
                }, function (item) {
                    $scope.errors = [];
                    $scope.errors.push(item.data);
                })
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

        GraduacaoService.Listar().then(function (item) {
            $scope.graduacoes = item.data;
        })

        AcademiaService.Listar().then(function (item) {
            $scope.academias = item.data;
        })
    }
})();
