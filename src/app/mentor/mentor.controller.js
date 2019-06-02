(function() {
    'use strict';

    angular
        .module('angularSeedApp')
        .controller('MentorController', MentorController);

    /** @ngInject */
    function MentorController(projectFactory, $scope) {
        var vm = this;

        $scope.disqusConfig = {
            disqus_shortname: 'https-queropratica-github-io',
            disqus_identifier: 'mentor_screen_',
            disqus_url: 'https://queropratica.github.io'
        };

        vm.subjects = [
            {'_id': 1, 'name': 'Lean'},
            {'_id': 2, 'name': '4 Ano'},
            {'_id': 3, 'name': 'Processos'},
            {'_id': 4, 'name': 'Lean'},
            {'_id': 5, 'name': '4 Ano'},
            {'_id': 6, 'name': 'Processos'},
            {'_id': 7, 'name': 'Lean'}
        ]

        projectFactory.load()
            .$promise.then(function (projects) {
                vm.subjects = projects
            })
    }
})();