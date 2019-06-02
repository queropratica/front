(function() {
    'use strict';

    angular
        .module('angularSeedApp')
        .controller('ProjectManageController', ProjectManageController);

    /** @ngInject */
    function ProjectManageController(projectFactory, $scope) {
        var vm = this;

        vm.changeForm = changeForm

        function changeForm (type) {
            if(type === 'levantamento') {
                vm.displayLevantamento = true
                vm.displayRelatorio = false
            }

            if(type === 'relatorio') {
                vm.displayLevantamento = false
                vm.displayRelatorio = true
            }
        }

        $scope.disqusConfig = {
            disqus_shortname: 'https-queropratica-github-io',
            disqus_identifier: 'mentor_screen_',
            disqus_url: 'https://queropratica.github.io'
        };

        vm.projects = [
            {title: 'Alohomora', summary: 'Alohomora do Agreste', owner: 'Owner PO', publishedAt: '25/05/2019'},
            {title: 'Alohomora', summary: 'Alohomora do Campo', owner: 'Owner Project', publishedAt: '26/05/2019'},
            {title: 'Alohomora', summary: 'Alohomora do Alom', owner: 'Owner Tes', publishedAt: '21/05/2019'},
            {title: 'Alohomora', summary: 'Alohomora do Adalon', owner: 'Owner Fas', publishedAt: '29/05/2019'}
        ]

        projectFactory.load()
            .$promise.then(function (projects) {
                vm.subjects = projects
            })
    }
})();