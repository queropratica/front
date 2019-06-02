(function() {
    'use strict';

    angular
        .module('angularSeedApp')
        .controller('StudentController', StudentController);

    /** @ngInject */
    function StudentController(projectFactory) {
        var vm = this;

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