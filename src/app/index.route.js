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
            })
            .state('projectCreation', {
                url: '/project/new',
                templateUrl: 'app/project/new.html',
                controller: 'ProjectNewController',
                controllerAs: 'newProject'
            })
            .state('student', {
                url: '/student',
                templateUrl: 'app/student/student.html',
                controller: 'StudentController',
                controllerAs: 'student'
            });

        $urlRouterProvider.otherwise('/mentor');
    }

})();