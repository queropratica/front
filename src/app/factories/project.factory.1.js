(function () {
    'use strict';

    angular
        .module('angularSeedApp')
        .factory('projectFactory', projectFactory);

    /** @ngInject */
    function projectFactory($resource) {
        var url = 'https://quero-pratica.herokuapp.com/project'

        return $resource(url, null, {
            'push': { method: 'PUT' },
            'pop': { method: 'DELETE' },
            'load': { method: 'GET' },
            'loadHandling': { method: 'POST' }
        })
    }
})();