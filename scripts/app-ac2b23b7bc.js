!function(){"use strict";angular.module("angularSeedApp",["ngAnimate","ngCookies","ngTouch","ngSanitize","ngResource","ui.router","angularUtils.directives.dirDisqus"])}(),function(){"use strict";function a(){function a(){}var e={restrict:"E",templateUrl:"app/components/navbar/navbar.html",scope:{creationDate:"="},controller:a,controllerAs:"vm",bindToController:!0};return e}angular.module("angularSeedApp").directive("acmeNavbar",a)}(),function(){"use strict";function a(){function a(){var a=this;a.slides=[{title:"1 title",image:"http://lorempixel.com/560/400/sports/1"},{title:"2 title",image:"http://lorempixel.com/560/400/sports/2"},{title:"3 title",image:"http://lorempixel.com/560/400/sports/3"},{title:"4 title",image:"http://lorempixel.com/560/400/sports/4"},{title:"5 title",image:"http://lorempixel.com/560/400/sports/5"}]}var e={restrict:"E",templateUrl:"app/components/main-card/maincard.html",scope:{creationDate:"="},controller:a,controllerAs:"vm",bindToController:!0};return e}angular.module("angularSeedApp").directive("mainCard",a)}(),function(){"use strict";function a(){function a(){var a=this;a.slides=[{title:"1 title",image:"http://lorempixel.com/560/400/sports/1"},{title:"2 title",image:"http://lorempixel.com/560/400/sports/2"},{title:"3 title",image:"http://lorempixel.com/560/400/sports/3"},{title:"4 title",image:"http://lorempixel.com/560/400/sports/4"},{title:"5 title",image:"http://lorempixel.com/560/400/sports/5"}]}var e={restrict:"E",templateUrl:"app/components/card-mentor/cardmentor.html",scope:{creationDate:"="},controller:a,controllerAs:"vm",bindToController:!0};return e}angular.module("angularSeedApp").directive("cardMentor",a)}(),function(){"use strict";function a(a){var e=this;e.subjects=[{_id:1,name:"Lean"},{_id:2,name:"4 Ano"},{_id:3,name:"Processos"},{_id:4,name:"Lean"},{_id:5,name:"4 Ano"},{_id:6,name:"Processos"},{_id:7,name:"Lean"}],a.load().$promise.then(function(a){e.subjects=a})}a.$inject=["projectFactory"],angular.module("angularSeedApp").controller("StudentController",a)}(),function(){"use strict";function a(a,e){var s=this;e.disqusConfig={disqus_shortname:"https-queropratica-github-io",disqus_identifier:"mentor_screen_",disqus_url:"https://queropratica.github.io"},s.subjects=[{_id:1,name:"Lean"},{_id:2,name:"4 Ano"},{_id:3,name:"Processos"},{_id:4,name:"Lean"},{_id:5,name:"4 Ano"},{_id:6,name:"Processos"},{_id:7,name:"Lean"}],a.load().$promise.then(function(a){s.subjects=a})}a.$inject=["projectFactory","$scope"],angular.module("angularSeedApp").controller("MentorController",a)}(),function(){"use strict";function a(a){var e="https://quero-pratica.herokuapp.com/project";return a(e,null,{push:{method:"PUT"},pop:{method:"DELETE"},load:{method:"GET"},loadHandling:{method:"POST"}})}a.$inject=["$resource"],angular.module("angularSeedApp").factory("projectFactory",a)}(),function(){"use strict";function a(a){a.debug("runBlock end")}a.$inject=["$log"],angular.module("angularSeedApp").run(a)}(),function(){"use strict";function a(a,e){a.state("mentor",{url:"/mentor",templateUrl:"app/mentor/mentor.html",controller:"MentorController",controllerAs:"mentor"}).state("student",{url:"/student",templateUrl:"app/student/student.html",controller:"StudentController",controllerAs:"student"}),e.otherwise("/mentor")}a.$inject=["$stateProvider","$urlRouterProvider"],angular.module("angularSeedApp").config(a)}(),function(){"use strict";angular.module("angularSeedApp").constant("malarkey",malarkey).constant("toastr",toastr).constant("moment",moment)}(),function(){"use strict";function a(a,e){a.debugEnabled(!0),e.options.timeOut=3e3,e.options.positionClass="toast-top-right",e.options.preventDuplicates=!0,e.options.progressBar=!0}a.$inject=["$logProvider","toastr"],angular.module("angularSeedApp").config(a)}(),angular.module("angularSeedApp").run(["$templateCache",function(a){a.put("app/mentor/mentor.html",'<div class="main"><div><acme-navbar></acme-navbar></div><header class="jumbotron jumbotron-fluid pb-4 mb-0"><div class="container"><div class="row"><div class="col-md-5"><strong>Cursos > Administração > Projetos Práticos</strong><h1 class="h2">Aumentando produtividade de processos</h1><p class="lead">Neste projeto, foi realizado o diagnóstico de processos de trabalho, identificação de problemas e redesenho para aumentar a produtividade de trabalho</p></div><div class="col-md-7 header-wrapper__personas"><div class="row no-gutters"><div class="col-md-4"><div class="row"><p class="col-12 title-card-persona">FACULDADE</p><div class="col-md-4"><img src="" class="card-img rounded-circle card-persona-pic" alt="..."></div><div class="col-md-8"><h5 class="card-title title-card-persona__name"><strong>Universidade Joseense dos Campos</strong></h5></div></div></div><div class="col-md-4"><div class="row"><p class="col-12 title-card-persona">MENTOR</p><div class="col-md-4"><img src="" class="card-img rounded-circle card-persona-pic" alt="..."></div><div class="col-md-8"><h5 class="card-title title-card-persona__name"><strong>José Luis</strong></h5><p class="title-card-persona__infos">Gerente de Projetos</p><p class="title-card-persona__infos">General Electric</p></div></div></div><div class="col-md-4"><div class="row"><p class="col-12 title-card-persona">ALUNO</p><div class="col-md-4"><img src="" class="card-img rounded-circle card-persona-pic" alt="..."></div><div class="col-md-8"><h5 class="card-title title-card-persona__name"><strong>Josão da Silva</strong></h5><p class="title-card-persona__infos">Gerente de Projetos</p><p class="title-card-persona__infos">General Electric</p></div></div></div></div></div></div></div></header><section><div class="container"><div class="row py-5"><div class="col-md-6"><h2 class="h4 mb-5">Resumo do Projeto</h2><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean porta placerat nulla, at mollis mi consequat sit amet. Vivamus nibh ipsum, malesuada vel pharetra sed, accumsan in dolor. Aenean volutpat neque lorem. Aenean feugiat felis quis nulla pharetra, venenatis porttitor nulla suscipit. Nullam vel libero lorem. Praesent auctor eleifend urna, ut tincidunt leo porttitor eu. Suspendisse ultrices ac est in dictum. Maecenas semper consequat risus. Pellentesque non lectus urna. Curabitur aliquet ligula id lorem aliquet, in gravida arcu ornare. In dictum nisi quam, vel venenatis urna convallis a.</p><p>Sed tortor risus, gravida imperdiet tristique ac, ultrices in ligula. Suspendisse facilisis gravida ultricies. Phasellus pharetra risus lacinia, lacinia sapien ac, consequat mi. Duis lobortis egestas augue, id pulvinar quam lacinia nec. Sed ultrices purus nec magna ultrices laoreet. Fusce ornare nisl eget sagittis varius. Cras ac velit condimentum, ultricies turpis vel, pretium lectus. Vestibulum eget dignissim enim, id sollicitudin enim. Duis a tortor nec nisi viverra posuere. Integer non posuere neque.</p><p>Ut elementum lectus ut purus fringilla vehicula. Duis eget quam vulputate, varius turpis ac, rhoncus nunc. Suspendisse sed mattis eros, vel maximus enim. Ut hendrerit justo sed nibh dictum auctor. Morbi mollis maximus elit, ac commodo lectus aliquam ac. Praesent non convallis enim. In mattis sem leo, eget laoreet neque ornare nec. Cras id maximus eros. Vestibulum vitae orci auctor, mollis urna ac, auctor diam.</p></div><div class="col-md-5 offset-md-1"><div class="form-readlall-article p-5"><h2 class="h4 mb-5">Quer ler o projeto na integra?</h2><form><div class="form-group"><input type="text" class="form-control" placeholder="Nome"></div><div class="form-group"><input type="email" class="form-control" placeholder="E-mail"></div><div class="form-group form-check"><input type="checkbox" class="form-check-input" id="exampleCheck1"> <label class="form-check-label" for="exampleCheck1">Receber indicações projetos publicados com temas relacionados ao Curso de Administração</label></div><button type="submit" class="btn btn-primary btn-block">Acessar Projeto</button></form></div></div></div></div></section><section ng-controller="MentorController as mentorController"><div class="container"><div class="row py-5"><div class="col-md-6"><h2 class="h4 mb-5">Conceitos Utilizados das Matérias:</h2><div class="row"><div class="row col-md-12"><label class="col-md-4">Análise de Custos</label><div class="col-md-8"><div class="progress mt-1"><div class="progress-bar" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div></div></div></div><div class="row col-md-12"><label class="col-md-4">Processos</label><div class="col-md-8"><div class="progress mt-1"><div class="progress-bar" role="progressbar" style="width: 65%" aria-valuenow="65" aria-valuemin="0" aria-valuemax="100"></div></div></div></div><div class="row col-md-12"><label class="col-md-4">Diagnóstico de Sistemas</label><div class="col-md-8"><div class="progress mt-1"><div class="progress-bar" role="progressbar" style="width: 68%" aria-valuenow="68" aria-valuemin="0" aria-valuemax="100"></div></div></div></div><div class="row col-md-12"><label class="col-md-4">Gestão de Projetos</label><div class="col-md-8"><div class="progress mt-1"><div class="progress-bar" role="progressbar" style="width: 85%" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div></div></div></div><div class="row col-md-12"><label class="col-md-4">Modelo de Gestão</label><div class="col-md-8"><div class="progress mt-1"><div class="progress-bar" role="progressbar" style="width: 40%" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"></div></div></div></div><div class="row col-md-12"><label class="col-md-4">Metodologias Ágeis</label><div class="col-md-8"><div class="progress mt-1"><div class="progress-bar" role="progressbar" style="width: 58%" aria-valuenow="58" aria-valuemin="0" aria-valuemax="100"></div></div></div></div></div></div><div class="col-md-5 offset-md-1"><h2 class="h4 mb-5">Palavras-Chave</h2><div><a ng-repeat="subject in mentorController.subjects track by subject._id" href="" class="btn btn-outline-secondary m-1">{{subject.name}}</a></div></div></div></div></section><section><div class="container"><div class="row mt-5"><h2 class="h4 mb-5 col-12">Projetos Relacionados</h2><div class="card-deck"><main-card></main-card><main-card></main-card><main-card></main-card><main-card class="mt-5"></main-card></div></div></div></section><section><dir-disqus config="disqusConfig"></dir-disqus></section></div>'),a.put("app/student/student.html",'<div class="main"><div><acme-navbar></acme-navbar></div><header class="jumbotron jumbotron-fluid pb-4 mb-0 querop-header-pg"><div class="container"><div class="row"><div class="col"><h1 class="h3">Projetos selecionados para você</h1></div></div></div></header><section><div class="container"><div class="row py-5"><div class="col-md-7"><div class="row mb-5"><div class="col-12 card mb-4 card-destaque-aluno p-0"><img src="..." class="card-img-top" alt="..."><div class="card-body text-center querop-card-destaque-aluno"><div class="d-flex"><h5 class="card-title">Gerenciando ferramentas ágeis dentro de projetos</h5><strong>Projeto Prático</strong><p class="card-text">Carlos da Silva, Lucas Silva e Silva</p></div></div><div class="querop-wrapper-destaque-card-aluno__footer"><a href="" class="btn btn-outline-light ml-auto mr-auto mb-4">Acessar</a><div class="card-footer bg-light"><small class="text-muted">Publicado: 01/06/2019</small></div></div></div><div class="card-deck"><div class="card"><img src="..." class="card-img-top" alt="..."><div class="card-body"><h5 class="card-title">Gerenciando ferramentas ágeis dentro de projetos</h5><strong>Projeto Prático</strong><p class="card-text">Carlos da Silva, Lucas Silva e Silva</p></div><a href="" class="btn btn-outline-primary">Acessar</a><div class="card-footer"><small class="text-muted">Publicado: 01/06/2019</small></div></div><div class="card"><img src="..." class="card-img-top" alt="..."><div class="card-body"><h5 class="card-title">Gerenciando ferramentas ágeis dentro de projetos</h5><strong>Projeto Prático</strong><p class="card-text">Carlos da Silva, Lucas Silva e Silva</p></div><a href="" class="btn btn-outline-primary">Acessar</a><div class="card-footer"><small class="text-muted">Publicado: 01/06/2019</small></div></div><div class="card"><img src="..." class="card-img-top" alt="..."><div class="card-body"><h5 class="card-title">Gerenciando ferramentas ágeis dentro de projetos</h5><strong>Projeto Prático</strong><p class="card-text">Carlos da Silva, Lucas Silva e Silva</p></div><a href="" class="btn btn-outline-primary">Acessar</a><div class="card-footer"><small class="text-muted">Publicado: 01/06/2019</small></div></div></div></div><nav aria-label="Page navigation example"><ul class="pagination justify-content-center"><li class="page-item disabled"><a class="page-link" href="#" tabindex="-1" aria-disabled="true">Anterior</a></li><li class="page-item"><a class="page-link" href="#">1</a></li><li class="page-item"><a class="page-link" href="#">2</a></li><li class="page-item"><a class="page-link" href="#">3</a></li><li class="page-item"><a class="page-link" href="#">Próximo</a></li></ul></nav></div><div class="col-md-4 offset-md-1"><h2 class="h4 mb-3">Por tema</h2><ul class="list-group"><li class="list-group-item d-flex justify-content-between align-items-center">Empreendedorismo <span class="badge badge-secondary badge-pill">14</span></li><li class="list-group-item d-flex justify-content-between align-items-center">Análise de Custos <span class="badge badge-secondary badge-pill">2</span></li><li class="list-group-item d-flex justify-content-between align-items-center">Comportamento Organizacional <span class="badge badge-secondary badge-pill">1</span></li><li class="list-group-item d-flex justify-content-between align-items-center">Imposto Mercadológico <span class="badge badge-secondary badge-pill">1</span></li><li class="list-group-item d-flex justify-content-between align-items-center">Planejamento Estratégico <span class="badge badge-secondary badge-pill">1</span></li><li class="list-group-item d-flex justify-content-between align-items-center">Imposto Mercadológico <span class="badge badge-secondary badge-pill">1</span></li></ul><h2 class="h4 mb-3 mt-5">Por tipo</h2><ul class="list-group"><li class="list-group-item d-flex justify-content-between align-items-center">Projetos Práticos <span class="badge badge-secondary badge-pill">24</span></li><li class="list-group-item d-flex justify-content-between align-items-center">Artigos Ciêntificos <span class="badge badge-secondary badge-pill">2</span></li><li class="list-group-item d-flex justify-content-between align-items-center">Trabalhos de Conclusão de Curso <span class="badge badge-secondary badge-pill">1</span></li></ul></div></div></div></section><section class="bg-light-gray py-4"><div class="container"><div class="row mt-5"><h2 class="h4 mb-4">Profissionais que podem te ajudar</h2><div class="card-deck"><card-mentor></card-mentor><card-mentor></card-mentor><card-mentor></card-mentor></div></div></div></section></div>'),a.put("app/components/card-mentor/cardmentor.html",'<div class="card querop-card-persona-mock"><span class="img-profile-mock rounded-circle"></span><div class="card-body"><h5 class="card-title">José Luiz</h5><p class="card-text">Engenheiro Chefe</p><p class="card-text"><small class="text-muted">Construtora Cowan</small></p></div></div>'),a.put("app/components/main-card/maincard.html",'<div class="card"><img src="..." class="card-img-top" alt="..."><div class="card-body"><h5 class="card-title">Gerenciando ferramentas ágeis dentro de projetos</h5><strong>Projeto Prático</strong><p class="card-text">Carlos da Silva, Lucas Silva e Silva</p></div><a href="" class="btn btn-outline-primary">Acessar</a><div class="card-footer"><small class="text-muted">Publicado: 01/06/2019</small></div></div>'),a.put("app/components/navbar/navbar.html",'<nav class="navbar navbar-expand-lg navbar-light bg-light"><a class="navbar-brand" href="#">QueroPrática</a> <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button><div class="collapse navbar-collapse" id="navbarText"><ul class="navbar-nav mr-auto"><li class="nav-item"><a class="nav-link" href="#">Home</a></li><li class="nav-item"><a class="nav-link" href="#">O que é?</a></li><li class="nav-item"><a class="nav-link" href="#">Cursos</a></li><li class="nav-item"><form class="form-inline my-2 my-lg-0"><input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"> <button class="btn btn-outline-primary my-2 my-sm-0" type="submit">Search</button></form></li></ul></div></nav>')}]);