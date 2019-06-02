(function() {
    'use strict';

    angular
        .module('angularSeedApp')
        .config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('mentor', {
                url: '/mentor',
                templateUrl: 'app/mentor/mentor.html',
                controller: 'MentorController',
                controllerAs: 'mentor'
            });

        $urlRouterProvider.otherwise('/mentor');
    }

})();