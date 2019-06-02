(function() {
    'use strict';

    angular
        .module('angularSeedApp')
        .controller('MentorController', MentorController);

    /** @ngInject */
    function MentorController(projectFactory, $scope, $state) {
        var vm = this;

        vm.redirectToCreateProject = redirectToCreateProject

        function redirectToCreateProject () {
            $state.go('projectCreation')
        }

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

        vm.mentors = [
            {name: 'Lucas Marcial', jobDescription: '3º Semestre - Noturno', company: 'Administração'},
            {name: 'Lucas Otávio', jobDescription: '1º Semestre - Noturno', company: 'Administração'},
            {name: 'Bruno Alfredo', jobDescription: '4º Semestre - Noturno', company: 'Administração'},
            {name: 'Fernando Alfredo', jobDescription: '4º Semestre - Noturno', company: 'Administração'}
        ]

        projectFactory.load()
            .$promise.then(function (projects) {
                vm.subjects = projects
            })
    }
})();