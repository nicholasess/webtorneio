angular.module('app').config(function ($routeProvider, $httpProvider) {
    $routeProvider
       .when('/', {
           controller: 'HomeCtrl',
           templateUrl: 'app/areas/sistema/views/home/index.html',
           controllerAs: 'vm',
           authorize: true
       })
       .when('/academia', {
           controller: 'academia.index',
           templateUrl: 'app/areas/sistema/views/academia/index.html',
           controllerAs: 'vm',
           authorize: true
       })
       .when('/academia/cadastro', {
           controller: 'academia.cadastro',
           templateUrl: 'app/areas/sistema/views/academia/cadastro.html',
           controllerAs: 'vm',
           authorize: true
       })
       .when('/academia/edicao/:id', {
           controller: 'academia.edicao',
           templateUrl: 'app/areas/sistema/views/academia/edicao.html',
           controllerAs: 'vm',
           authorize: true
       })
       .when('/academiatorneio', {
           controller: 'academia.torneio.index',
           templateUrl: 'app/areas/sistema/views/academiatorneio/index.html',
           controllerAs: 'vm',
           authorize: true
       })
       .when('/academiatorneio/cadastro', {
           controller: 'academia.torneio.cadastro',
           templateUrl: 'app/areas/sistema/views/academiatorneio/cadastro.html',
           controllerAs: 'vm',
           authorize: true
       })
       .when('/academiatorneio/edicao/:id', {
           controller: 'academia.torneio.edicao',
           templateUrl: 'app/areas/sistema/views/academiatorneio/edicao.html',
           controllerAs: 'vm',
           authorize: true
       })
       .when('/atleta', {
           controller: 'atleta.index',
           templateUrl: 'app/areas/sistema/views/atleta/index.html',
           controllerAs: 'vm',
           authorize: true
       })
       .when('/atleta/cadastro', {
           controller: 'atleta.cadastro',
           templateUrl: 'app/areas/sistema/views/atleta/cadastro.html',
           controllerAs: 'vm',
           authorize: true
       })
       .when('/atleta/edicao/:id', {
           controller: 'atleta.edicao',
           templateUrl: 'app/areas/sistema/views/atleta/edicao.html',
           controllerAs: 'vm',
           authorize: true
       })
       .when('/atletaacademia', {
           controller: 'atletaacademia.index',
           templateUrl: 'app/areas/sistema/views/atletaacademia/index.html',
           controllerAs: 'vm',
           authorize: true
       })
       .when('/atletaacademia/cadastro', {
           controller: 'atletaacademia.cadastro',
           templateUrl: 'app/areas/sistema/views/atletaacademia/cadastro.html',
           controllerAs: 'vm',
           authorize: true
       })
       .when('/atletaacademia/edicao/:id', {
           controller: 'atletaacademia.edicao',
           templateUrl: 'app/areas/sistema/views/atletaacademia/edicao.html',
           controllerAs: 'vm',
           authorize: true
       })
       .when('/categoria', {
           controller: 'categoria.index',
           templateUrl: 'app/areas/sistema/views/categoria/index.html',
           controllerAs: 'vm',
           authorize: true
       })
       .when('/categoria/cadastro', {
           controller: 'categoria.cadastro',
           templateUrl: 'app/areas/sistema/views/categoria/cadastro.html',
           controllerAs: 'vm',
           authorize: true
       })
       .when('/categoria/edicao/:id', {
           controller: 'categoria.edicao',
           templateUrl: 'app/areas/sistema/views/categoria/edicao.html',
           controllerAs: 'vm',
           authorize: true
       })
       .when('/categoriatorneio', {
           controller: 'CategoriaTorneioCtrl',
           templateUrl: 'app/areas/sistema/views/categoriatorneio/index.html',
           controllerAs: 'vm',
           authorize: true
       })
       .when('/categoriatorneio/cadastro', {
           controller: 'CategoriaTorneioCtrl',
           templateUrl: 'app/areas/sistema/views/categoriatorneio/cadastro.html',
           controllerAs: 'vm',
           authorize: true
       })
       .when('/cidade', {
           controller: 'cidade.index',
           templateUrl: 'app/areas/sistema/views/cidade/index.html',
           controllerAs: 'vm',
           authorize: true
       })
       .when('/cidade/cadastro', {
           controller: 'cidade.cadastro',
           templateUrl: 'app/areas/sistema/views/cidade/cadastro.html',
           controllerAs: 'vm',
           authorize: true
       })
       .when('/cidade/edicao/:id', {
           controller: 'cidade.edicao',
           templateUrl: 'app/areas/sistema/views/cidade/edicao.html',
           controllerAs: 'vm',
           authorize: true
       })
       .when('/classe', {
           controller: 'classe.index',
           templateUrl: 'app/areas/sistema/views/classe/index.html',
           controllerAs: 'vm',
           authorize: true
       })
       .when('/classe/cadastro', {
           controller: 'classe.cadastro',
           templateUrl: 'app/areas/sistema/views/classe/cadastro.html',
           controllerAs: 'vm',
           authorize: true
       })
       .when('/classe/edicao/:id', {
           controller: 'classe.edicao',
           templateUrl: 'app/areas/sistema/views/classe/edicao.html',
           controllerAs: 'vm',
           authorize: true
       })
       .when('/configuracao', {
           controller: 'ConfiguracaoCtrl',
           templateUrl: 'app/areas/sistema/views/configuracao/index.html',
           controllerAs: 'vm',
           authorize: true
       })
       .when('/configuracao/cadastro', {
           controller: 'ConfiguracaoCtrl',
           templateUrl: 'app/areas/sistema/views/configuracao/cadastro.html',
           controllerAs: 'vm',
           authorize: true
       })
       .when('/continente', {
           controller: 'continente.index',
           templateUrl: 'app/areas/sistema/views/continente/index.html',
           controllerAs: 'vm',
           authorize: true
       })
       .when('/continente/cadastro', {
           controller: 'continente.cadastro',
           templateUrl: 'app/areas/sistema/views/continente/cadastro.html',
           controllerAs: 'vm',
           authorize: true
       })
       .when('/continente/edicao/:id', {
           controller: 'continente.edicao',
           templateUrl: 'app/areas/sistema/views/continente/edicao.html',
           controllerAs: 'vm',
           authorize: true
       })
       .when('/divisao', {
           controller: 'divisao.index',
           templateUrl: 'app/areas/sistema/views/divisao/index.html',
           controllerAs: 'vm',
           authorize: true
       })
       .when('/divisao/cadastro', {
           controller: 'divisao.cadastro',
           templateUrl: 'app/areas/sistema/views/divisao/cadastro.html',
           controllerAs: 'vm',
           authorize: true
       })
       .when('/divisao/edicao/:id', {
           controller: 'divisao.edicao',
           templateUrl: 'app/areas/sistema/views/divisao/edicao.html',
           controllerAs: 'vm',
           authorize: true
       })
       .when('/estado', {
           controller: 'estado.index',
           templateUrl: 'app/areas/sistema/views/estado/index.html',
           controllerAs: 'vm',
           authorize: true
       })
       .when('/estado/cadastro', {
           controller: 'estado.cadastro',
           templateUrl: 'app/areas/sistema/views/estado/cadastro.html',
           controllerAs: 'vm',
           authorize: true
       })
       .when('/estado/edicao/:id', {
           controller: 'estado.edicao',
           templateUrl: 'app/areas/sistema/views/estado/edicao.html',
           controllerAs: 'vm',
           authorize: true
       })
       .when('/graduacao', {
           controller: 'graduacao.index',
           templateUrl: 'app/areas/sistema/views/graduacao/index.html',
           controllerAs: 'vm',
           authorize: true
       })
       .when('/graduacao/cadastro', {
           controller: 'graduacao.cadastro',
           templateUrl: 'app/areas/sistema/views/graduacao/cadastro.html',
           controllerAs: 'vm',
           authorize: true
       })
      .when('/graduacao/edicao/:id', {
           controller: 'graduacao.edicao',
           templateUrl: 'app/areas/sistema/views/graduacao/edicao.html',
           controllerAs: 'vm',
           authorize: true
       })
       .when('/inscricao', {
           controller: 'InscricaoCtrl',
           templateUrl: 'app/areas/sistema/views/inscricao/index.html',
           controllerAs: 'vm',
           authorize: true
       })
       .when('/inscricao/cadastro', {
           controller: 'InscricaoCtrl',
           templateUrl: 'app/areas/sistema/views/inscricao/cadastro.html',
           controllerAs: 'vm',
           authorize: true
       })
       .when('/organizadortorneio', {
           controller: 'OrganizadorTorneioCtrl',
           templateUrl: 'app/areas/sistema/views/organizadortorneio/index.html',
           controllerAs: 'vm',
           authorize: true
       })
       .when('/organizadortorneio/cadastro', {
           controller: 'OrganizadorTorneioCtrl',
           templateUrl: 'app/areas/sistema/views/organizadortorneio/cadastro.html',
           controllerAs: 'vm',
           authorize: true
       })
       .when('/pais', {
           controller: 'pais.index',
           templateUrl: 'app/areas/sistema/views/pais/index.html',
           controllerAs: 'vm',
           authorize: true
       })
       .when('/pais/cadastro', {
           controller: 'pais.cadastro',
           templateUrl: 'app/areas/sistema/views/pais/cadastro.html',
           controllerAs: 'vm',
           authorize: true
       })
       .when('/pais/edicao/:id', {
           controller: 'pais.edicao',
           templateUrl: 'app/areas/sistema/views/pais/edicao.html',
           controllerAs: 'vm',
           authorize: true
       })
       .when('/pessoa', {
           controller: 'PessoaCtrl',
           templateUrl: 'app/areas/sistema/views/pessoa/index.html',
           controllerAs: 'vm',
           authorize: true
       })
       .when('/pessoa/cadastro', {
           controller: 'PessoaCtrl',
           templateUrl: 'app/areas/sistema/views/pessoa/cadastro.html',
           controllerAs: 'vm',
           authorize: true
       })
       .when('/premiacaocategoria', {
           controller: 'PremiacaoCategoriaCtrl',
           templateUrl: 'app/areas/sistema/views/premiacaocategoria/index.html',
           controllerAs: 'vm',
           authorize: true
       })
       .when('/premiacaocategoria/cadastro', {
           controller: 'PremiacaoCategoriaCtrl',
           templateUrl: 'app/areas/sistema/views/premiacaocategoria/cadastro.html',
           controllerAs: 'vm',
           authorize: true
       })
       .when('/premiacao', {
           controller: 'PremiacaoCtrl',
           templateUrl: 'app/areas/sistema/views/premiacao/index.html',
           controllerAs: 'vm',
           authorize: true
       })
       .when('/premiacao/cadastro', {
           controller: 'PremiacaoCtrl',
           templateUrl: 'app/areas/sistema/views/premiacao/cadastro.html',
           controllerAs: 'vm',
           authorize: true
       })
       .when('/torneio', {
           controller: 'TorneioCtrl',
           templateUrl: 'app/areas/sistema/views/torneio/index.html',
           controllerAs: 'vm',
           authorize: true
       })
       .when('/torneio/cadastro', {
           controller: 'TorneioCtrl',
           templateUrl: 'app/areas/sistema/views/torneio/cadastro.html',
           controllerAs: 'vm',
           authorize: true
       })
       .when('/usuario', {
           controller: 'UsuarioCtrl',
           templateUrl: 'app/areas/sistema/views/usuario/index.html',
           controllerAs: 'vm',
           authorize: true
       })
       .when('/usuario/cadastro', {
           controller: 'UsuarioCtrl',
           templateUrl: 'app/areas/sistema/views/usuario/cadastro.html',
           controllerAs: 'vm',
           authorize: true
       })
       .when('/valorinscricao', {
           controller: 'ValorInscricaoCtrl',
           templateUrl: 'app/areas/sistema/views/valorinscricao/index.html',
           controllerAs: 'vm',
           authorize: true
       })
       .when('/valorinscricao/cadastro', {
           controller: 'ValorInscricaoCtrl',
           templateUrl: 'app/areas/sistema/views/valorinscricao/cadastro.html',
           controllerAs: 'vm',
           authorize: true
       })
       .when('/valorpremiacao', {
           controller: 'ValorPremiacaoCtrl',
           templateUrl: 'app/areas/sistema/views/valorpremiacao/index.html',
           controllerAs: 'vm',
           authorize: true
       })
       .when('/valorpremiacao/cadastro', {
           controller: 'ValorPremiacaoCtrl',
           templateUrl: 'app/areas/sistema/views/valorpremiacao/cadastro.html',
           controllerAs: 'vm',
           authorize: true
       });

});