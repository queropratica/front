(function () {
  'use strict'

  angular
        .module('angularSeedApp')
        .controller('MentorController', MentorController)

    /** @ngInject */
  function MentorController (projectFactory, $scope, $state) {
    var vm = this

    vm.redirectToCreateProject = redirectToCreateProject

    function redirectToCreateProject () {
      $state.go('projectCreation')
    }

    vm.projects = [
            {title: 'Introdução à pesquisa em ciências sociais', img: 'https://randomuser.me/api/portraits/men/55.jpg', summary: 'Introdução à pesquisa em Ciências Sociais foi concebida por nós, simplesmente, como um apoio preliminar para todos aqueles educadores que pretendem iniciar um trabalho no campo da investigação educacional. Neste sentido, não pretendemos competir com os …', owner: 'Owner PO', publishedAt: '25/05/2019'},
            {title: 'Computação evolutiva: uma abordagem pragmática', img: 'https://randomuser.me/api/portraits/women/96.jpg', summary: 'Este tutorial cobre aspectos básicos da história e do estado da arte da computação evolutiva, uma área de pesquisa muito jovem, sendo que a própria denominação foi proposta em 1991, representando um esforço em congregar diversas iniciativas de …', owner: 'Owner Project', publishedAt: '26/05/2019'},
            {title: 'A economia das trocas simbólicas', img: 'https://randomuser.me/api/portraits/women/86.jpg', summary: 'O que podemos entender por estrutura, é importante ressaltar que para Bourdieu estrutura não pode ser apenas considerada como uma relação que as partes mantêm entre si, o que respectivamente, manifestam propriedades que resultam de sua dependência relativa à …', owner: 'Owner Tes', publishedAt: '21/05/2019'},
            {title: 'Computação em nuvem: Princípios, tecnologias e desafios', img: 'https://randomuser.me/api/portraits/women/76.jpg', summary: 'Plataformas e software estão disponibilizados como serviços, sendo estes disponibilizados por ambientes de Computação em Nuvem. Isso tem melhorado a flexibilidade, reduzindo o custo total dos negócios e provendo serviços sob demanda. Muitas empresas já utilizam …', owner: 'Owner Fas', publishedAt: '29/05/2019'}
    ]

    projectFactory.load()
            .$promise.then(function (projects) {
              vm.subjects = projects
            })
  }
})()
