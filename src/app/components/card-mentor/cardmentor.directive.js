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
                creationDate: '='
            },
            controller: CardMentorController,
            controllerAs: 'vm',
            bindToController: true
        };

        return directive;

        /** @ngInject */
        function CardMentorController() {
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