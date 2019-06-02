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
                creationDate: '='
            },
            controller: MainCardController,
            controllerAs: 'vm',
            bindToController: true
        };

        return directive;

        /** @ngInject */
        function MainCardController() {
            var vm = this;

            vm.slides = [
                {
                    title: "1 title",
                    image: 'http://lorempixel.com/560/400/sports/1',
                },
                {
                    title: "2 title",
                    image: 'http://lorempixel.com/560/400/sports/2',
                },
                {
                    title: "3 title",
                    image: 'http://lorempixel.com/560/400/sports/3',
                },
                {
                    title: "4 title",
                    image: 'http://lorempixel.com/560/400/sports/4',
                },
                {
                    title: "5 title",
                    image: 'http://lorempixel.com/560/400/sports/5',
                },
            ];
        }
    }

})();