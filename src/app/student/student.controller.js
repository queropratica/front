(function() {
    'use strict';

    angular
        .module('angularSeedApp')
        .controller('StudentController', StudentController);

    /** @ngInject */
    function StudentController(userFactory) {
        var vm = this;

        vm.mentors = [
            {name: 'Claudio Brandão', jobDescription: 'Engenharia de Produção', company: 'José Luis'},
            {name: 'Luis Noletto', jobDescription: 'Administração', company: 'Lucas Roberto'},
            {name: 'Paulo Alias', jobDescription: 'Administração, Todos', company: 'Luis Roberto'},
            {name: 'Thales Marra', jobDescription: 'Administração', company: 'Paulo Macedo'}
        ]

        vm.projects = [
            {title: 'Planejando a criação de uma empresa', summary: 'Administração, Todos', owner: 'Luis Roberto', publishedAt: '24/05/2019'},
            {title: 'Aplicando microeconomia na empresa', summary: 'Administração', owner: 'Paulo Macedo', publishedAt: '26/07/2019'},
            {title: 'Como gerir a construção de uma casa', summary: 'Administração', owner: 'Lucas Roberto', publishedAt: '13/02/2019'},
            {title: 'Analisando uma política pública', summary: 'Engenharia de Produção', owner: 'José Luis', publishedAt: '01/07/2019'}
        ]

        userFactory.getMentors()
            .$promise.then(function (mentors) {
                //vm.mentors = mentors
            })
    }
})();