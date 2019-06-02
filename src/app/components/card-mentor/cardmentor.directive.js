(function () {
    'use strict';

    angular
        .module('angularSeedApp')
        .directive('cardMentor', cardMentor);

    /** @ngInject */
    function cardMentor() {
        var directive = {
            restrict: 'E',
            templateUrl: 'app/components/card-mentor/cardmentor.html',
            scope: {
                creationDate: '=',
                item: '='
            },
            controller: CardMentorController,
            controllerAs: 'vm',
            bindToController: true
        };

        return directive;

        /** @ngInject */
        function CardMentorController() {
        }
    }

})();