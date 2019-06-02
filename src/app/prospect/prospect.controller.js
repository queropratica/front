(function() {
    'use strict';

    angular
        .module('angularSeedApp')
        .controller('ProspectController', ProspectController);

    /** @ngInject */
    function ProspectController(projectFactory, $scope) {
        var vm = this;

        $scope.disqusConfig = {
            disqus_shortname: 'https-queropratica-github-io',
            disqus_identifier: 'mentor_screen_',
            disqus_url: 'https://queropratica.github.io'
        };

        vm.projects = [
            {title: 'Planejando a criação de uma empresa', summary: 'Administração, Todos', owner: 'Luis Roberto', publishedAt: '24/05/2019'},
            {title: 'Aplicando microeconomia na empresa', summary: 'Administração', owner: 'Paulo Macedo', publishedAt: '26/07/2019'},
            {title: 'Como gerir a construção de uma casa', summary: 'Administração', owner: 'Lucas Roberto', publishedAt: '13/02/2019'},
            {title: 'Analisando uma política pública', summary: 'Engenharia de Produção', owner: 'José Luis', publishedAt: '01/07/2019'}
        ]

        vm.subjects = [
            { _id: 1, name: 'Lean'},
            { _id: 2, name: 'Processos'},
            { _id: 3, name: '4º Ano'},
            { _id: 4, name: 'Lean'},
            { _id: 5, name: 'Processos'},
            { _id: 6, name: '4º Ano'}
        ]
    }
})();