(function () {
    'use strict';

    angular
        .module('angularSeedApp')
        .controller('ProjectManageController', ProjectManageController);

    /** @ngInject */
    function ProjectManageController(projectFactory, $scope, $state, SweetAlert) {
        var vm = this;

        vm.changeForm = changeForm
        vm.goToProspect = goToProspect

        function changeForm(type) {
            if (type === 'levantamento') {
                vm.displayLevantamento = true
                vm.displayRelatorio = false
            }

            if (type === 'relatorio') {
                vm.displayLevantamento = false
                vm.displayRelatorio = true
            }
        }

        function goToProspect() {
            SweetAlert.swal({
                title: "Projeto publicado com sucesso !",
                text: "Agora o projeto esta publico e podera ser acessado por qualquer estudante",
                type: "success",
                showCancelButton: false,
                confirmButtonColor: "#A5DC86",
                confirmButtonText: "Ver projeto publicado !",
                closeOnConfirm: true
            },
                function () {
                    $state.go('prospect');
                });
        }

        $scope.disqusConfig = {
            disqus_shortname: 'https-queropratica-github-io',
            disqus_identifier: 'manager_screen_123',
            disqus_url: 'https://queropratica.github.io'
        };

        vm.projects = [
            {title: 'Planejando a criação de uma empresa', summary: 'Administração, Todos', owner: 'Luis Roberto', publishedAt: '24/05/2019'},
            {title: 'Aplicando microeconomia na empresa', summary: 'Administração', owner: 'Paulo Macedo', publishedAt: '26/07/2019'},
            {title: 'Como gerir a construção de uma casa', summary: 'Administração', owner: 'Lucas Roberto', publishedAt: '13/02/2019'},
            {title: 'Analisando uma política pública', summary: 'Engenharia de Produção', owner: 'José Luis', publishedAt: '01/07/2019'}
        ]

        projectFactory.load()
            .$promise.then(function (projects) {
                vm.subjects = projects
            })
    }
})();