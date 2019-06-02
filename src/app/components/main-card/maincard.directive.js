(function () {
    'use strict';

    angular
        .module('angularSeedApp')
        .directive('mainCard', mainCard);

    /** @ngInject */
    function mainCard() {
        var directive = {
            restrict: 'E',
            templateUrl: 'app/components/main-card/maincard.html',
            scope: {
                creationDate: '=',
                item: '='
            },
            controller: MainCardController,
            controllerAs: 'vm',
            bindToController: true
        };

        return directive;

        /** @ngInject */
        function MainCardController($state) {
            var vm = this

            vm.goToProjectDetails = goToProjectDetails

            function goToProjectDetails () {
                $state.go('detailsProject')
            }
        }
    }

})();