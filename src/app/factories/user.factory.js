(function () {
    'use strict';

    angular
        .module('angularSeedApp')
        .factory('userFactory', userFactory);

    /** @ngInject */
    function userFactory($resource) {
        var rootUrl = 'https://quero-pratica.herokuapp.com/users'

        return $resource(rootUrl, null, {
            'push': { method: 'PUT' },
            'pop': { method: 'DELETE' },
            'getMentors': { method: 'GET', url: rootUrl + '/mentors' },
            'loadHandling': { method: 'POST' }
        })
    }
})();