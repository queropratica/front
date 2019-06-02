(function() {
    'use strict';

    angular
        .module('angularSeedApp')
        .config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'app/home/home.html',
                controller: 'HomeController',
                controllerAs: 'home'
            })
            .state('prospect', {
                url: '/prospect',
                templateUrl: 'app/prospect/prospect.html',
                controller: 'ProspectController',
                controllerAs: 'prospect'
            })
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
            .state('manageProject', {
                url: '/project/manage',
                templateUrl: 'app/project/manage.html',
                controller: 'ProjectManageController',
                controllerAs: 'manageProject'
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