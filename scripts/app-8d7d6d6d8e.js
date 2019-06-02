!function(){"use strict";angular.module("angularSeedApp",["ngAnimate","ngCookies","ngTouch","ngSanitize","ngResource","ui.router","angularUtils.directives.dirDisqus","oitozero.ngSweetAlert"])}(),function(){"use strict";function e(){function e(){}var a={restrict:"E",templateUrl:"app/components/navbar/navbar.html",scope:{creationDate:"="},controller:e,controllerAs:"vm",bindToController:!0};return a}angular.module("angularSeedApp").directive("acmeNavbar",e)}(),function(){"use strict";function e(){function e(){}var a={restrict:"E",templateUrl:"app/components/main-card/maincard.html",scope:{creationDate:"=",item:"="},controller:e,controllerAs:"vm",bindToController:!0};return a}angular.module("angularSeedApp").directive("mainCard",e)}(),function(){"use strict";function e(){function e(){}var a={restrict:"E",templateUrl:"app/components/card-mentor/cardmentor.html",scope:{creationDate:"=",item:"="},controller:e,controllerAs:"vm",bindToController:!0};return a}angular.module("angularSeedApp").directive("cardMentor",e)}(),function(){"use strict";function e(e){var a=this;a.mentors=[{name:"Alohomora",jobDescription:"Alohomora do Agreste",company:"Acme"},{name:"Alohomora",jobDescription:"Alohomora do Campo",company:"Acme"},{name:"Alohomora",jobDescription:"Alohomora do Alom",company:"Acme"},{name:"Alohomora",jobDescription:"Alohomora do Adalon",company:"Acme"}],a.projects=[{title:"Alohomora",summary:"Alohomora do Agreste",owner:"Owner PO",publishedAt:"25/05/2019"},{title:"Alohomora",summary:"Alohomora do Campo",owner:"Owner Project",publishedAt:"26/05/2019"},{title:"Alohomora",summary:"Alohomora do Alom",owner:"Owner Tes",publishedAt:"21/05/2019"},{title:"Alohomora",summary:"Alohomora do Adalon",owner:"Owner Fas",publishedAt:"29/05/2019"}],e.getMentors().$promise.then(function(e){})}e.$inject=["userFactory"],angular.module("angularSeedApp").controller("StudentController",e)}(),function(){"use strict";function e(e,a){var o=this;a.disqusConfig={disqus_shortname:"https-queropratica-github-io",disqus_identifier:"mentor_screen_",disqus_url:"https://queropratica.github.io"},o.projects=[{title:"Alohomora",summary:"Alohomora do Agreste",owner:"Owner PO",publishedAt:"25/05/2019"},{title:"Alohomora",summary:"Alohomora do Campo",owner:"Owner Project",publishedAt:"26/05/2019"},{title:"Alohomora",summary:"Alohomora do Alom",owner:"Owner Tes",publishedAt:"21/05/2019"},{title:"Alohomora",summary:"Alohomora do Adalon",owner:"Owner Fas",publishedAt:"29/05/2019"}],e.load().$promise.then(function(e){o.subjects=e})}e.$inject=["projectFactory","$scope"],angular.module("angularSeedApp").controller("ProspectController",e)}(),function(){"use strict";function e(e,a,o,s){function r(e){"introduction"===e&&(l.displayIntrodution=!0,l.displaySchedule=!1,l.displayAppliedSubjects=!1),"subjects"===e&&(l.displayAppliedSubjects=!0,l.displayIntrodution=!1,l.displaySchedule=!1),"schedule"===e&&(l.displaySchedule=!0,l.displayAppliedSubjects=!1,l.displayIntrodution=!1)}function t(){o.swal({title:"Você publicou seu projeto com sucesso.",text:"Agora é só aguardar para que algum aluno se inscreva nele :)",type:"success",showCancelButton:!1,confirmButtonColor:"#A5DC86",confirmButtonText:"Show !",closeOnConfirm:!0},function(){s.go("mentor")})}var l=this;l.changeForm=r,l.publishProject=t,a.disqusConfig={disqus_shortname:"https-queropratica-github-io",disqus_identifier:"mentor_screen_",disqus_url:"https://queropratica.github.io"},l.projects=[{title:"Alohomora",summary:"Alohomora do Agreste",owner:"Owner PO",publishedAt:"25/05/2019"},{title:"Alohomora",summary:"Alohomora do Campo",owner:"Owner Project",publishedAt:"26/05/2019"},{title:"Alohomora",summary:"Alohomora do Alom",owner:"Owner Tes",publishedAt:"21/05/2019"},{title:"Alohomora",summary:"Alohomora do Adalon",owner:"Owner Fas",publishedAt:"29/05/2019"}],e.load().$promise.then(function(e){l.subjects=e})}e.$inject=["projectFactory","$scope","SweetAlert","$state"],angular.module("angularSeedApp").controller("ProjectNewController",e)}(),function(){"use strict";function e(e,a){function o(e){"levantamento"===e&&(s.displayLevantamento=!0,s.displayRelatorio=!1),"relatorio"===e&&(s.displayLevantamento=!1,s.displayRelatorio=!0)}var s=this;s.changeForm=o,a.disqusConfig={disqus_shortname:"https-queropratica-github-io",disqus_identifier:"mentor_screen_",disqus_url:"https://queropratica.github.io"},s.projects=[{title:"Alohomora",summary:"Alohomora do Agreste",owner:"Owner PO",publishedAt:"25/05/2019"},{title:"Alohomora",summary:"Alohomora do Campo",owner:"Owner Project",publishedAt:"26/05/2019"},{title:"Alohomora",summary:"Alohomora do Alom",owner:"Owner Tes",publishedAt:"21/05/2019"},{title:"Alohomora",summary:"Alohomora do Adalon",owner:"Owner Fas",publishedAt:"29/05/2019"}],e.load().$promise.then(function(e){s.subjects=e})}e.$inject=["projectFactory","$scope"],angular.module("angularSeedApp").controller("ProjectManageController",e)}(),function(){"use strict";function e(e,a,o){function s(){o.go("projectCreation")}var r=this;r.redirectToCreateProject=s,a.disqusConfig={disqus_shortname:"https-queropratica-github-io",disqus_identifier:"mentor_screen_",disqus_url:"https://queropratica.github.io"},r.projects=[{title:"Alohomora",summary:"Alohomora do Agreste",owner:"Owner PO",publishedAt:"25/05/2019"},{title:"Alohomora",summary:"Alohomora do Campo",owner:"Owner Project",publishedAt:"26/05/2019"},{title:"Alohomora",summary:"Alohomora do Alom",owner:"Owner Tes",publishedAt:"21/05/2019"},{title:"Alohomora",summary:"Alohomora do Adalon",owner:"Owner Fas",publishedAt:"29/05/2019"}],e.load().$promise.then(function(e){r.subjects=e})}e.$inject=["projectFactory","$scope","$state"],angular.module("angularSeedApp").controller("MentorController",e)}(),function(){"use strict";function e(e,a,o){function s(){o.go("student")}function r(){o.go("mentor")}var t=this;t.goToStudent=s,t.goToMentor=r,a.disqusConfig={disqus_shortname:"https-queropratica-github-io",disqus_identifier:"mentor_screen_",disqus_url:"https://queropratica.github.io"},t.projects=[{title:"Alohomora",summary:"Alohomora do Agreste",owner:"Owner PO",publishedAt:"25/05/2019"},{title:"Alohomora",summary:"Alohomora do Campo",owner:"Owner Project",publishedAt:"26/05/2019"},{title:"Alohomora",summary:"Alohomora do Alom",owner:"Owner Tes",publishedAt:"21/05/2019"},{title:"Alohomora",summary:"Alohomora do Adalon",owner:"Owner Fas",publishedAt:"29/05/2019"}],e.load().$promise.then(function(e){t.subjects=e})}e.$inject=["projectFactory","$scope","$state"],angular.module("angularSeedApp").controller("HomeController",e)}(),function(){"use strict";function e(e){var a="https://quero-pratica.herokuapp.com/users";return e(a,null,{push:{method:"PUT"},pop:{method:"DELETE"},getMentors:{method:"GET",url:a+"/mentors"},loadHandling:{method:"POST"}})}e.$inject=["$resource"],angular.module("angularSeedApp").factory("userFactory",e)}(),function(){"use strict";function e(e){var a="https://quero-pratica.herokuapp.com/project";return e(a,null,{push:{method:"PUT"},pop:{method:"DELETE"},load:{method:"GET"},loadHandling:{method:"POST"}})}e.$inject=["$resource"],angular.module("angularSeedApp").factory("projectFactory",e)}(),function(){"use strict";function e(e){e.debug("runBlock end")}e.$inject=["$log"],angular.module("angularSeedApp").run(e)}(),function(){"use strict";function e(e,a){e.state("home",{url:"/",templateUrl:"app/home/home.html",controller:"HomeController",controllerAs:"home"}).state("prospect",{url:"/prospect",templateUrl:"app/prospect/prospect.html",controller:"ProspectController",controllerAs:"prospect"}).state("mentor",{url:"/mentor",templateUrl:"app/mentor/mentor.html",controller:"MentorController",controllerAs:"mentor"}).state("projectCreation",{url:"/project/new",templateUrl:"app/project/new.html",controller:"ProjectNewController",controllerAs:"newProject"}).state("manageProject",{url:"/project/manage",templateUrl:"app/project/manage.html",controller:"ProjectManageController",controllerAs:"manageProject"}).state("student",{url:"/student",templateUrl:"app/student/student.html",controller:"StudentController",controllerAs:"student"}),a.otherwise("/mentor")}e.$inject=["$stateProvider","$urlRouterProvider"],angular.module("angularSeedApp").config(e)}(),function(){"use strict";angular.module("angularSeedApp").constant("malarkey",malarkey).constant("toastr",toastr).constant("moment",moment)}(),function(){"use strict";function e(e,a){e.debugEnabled(!0),a.options.timeOut=3e3,a.options.positionClass="toast-top-right",a.options.preventDuplicates=!0,a.options.progressBar=!0}e.$inject=["$logProvider","toastr"],angular.module("angularSeedApp").config(e)}(),angular.module("angularSeedApp").run(["$templateCache",function(e){e.put("app/home/home.html",'<div class="main" ng-controller="HomeController as homeController"><div><acme-navbar></acme-navbar></div><header class="jumbotron jumbotron-fluid pb-4 mb-0 querop-header-index querop-ilustra-index"><div class="container"><div class="row text-center"><h1 class="querop-h-index"><strong>QUERO</strong>PRÁTICA</h1><p class="querop-p-blue-sub-title">Uma oportunidade única de aplicar conhecimentos obtidos na faculdade<br>de forma prática, acompanhada por ex-alunos da faculdade e em casos reais.</p><div class="row w-100 d-flex align-content-center" style="margin-top: 162px;"><div class="col-md-3 text-right"><label for="persona-student" class="h5"><strong>Para Estudantes</strong></label><p id="persona-student">A possibilidade de aprender conceitos na prática, com projetos reais e conhecer profissionais</p><a class="btn btn-outline-primary" ng-click="homeController.goToStudent()">Acessar como Estudante</a></div><div class="col-md-6"></div><div class="col-md-3 text-left"><label for="persona-mentor" class="h5"><strong>Para Mentores</strong></label><p id="persona-mentor">Encontrar estudantes para lhes<br>ajudarem a resolver cases reais<br>e disseminarem conhecimento</p><a class="btn btn-outline-primary" ng-click="homeController.goToMentor()">Acessar como Mentor(a)</a></div></div></div></div></header></div>'),e.put("app/project/manage.html",'<div class="main" ng-controller="ProjectManageController as projectManageController"><div><acme-navbar></acme-navbar></div><header class="jumbotron jumbotron-fluid pb-4 mb-0 querop-header-pg"><div class="container"><div class="row"><div class="col-md-7"><strong>Projetos > Administração > Projetos Práticos</strong><h1 class="h2">Redesenho de processos</h1></div><div class="col-md-5 header-wrapper__personas justify-content-end"><div class="row no-gutters"><div class="col-md-10"><div class="row"><p class="col-12 title-card-persona">MENTOR</p><div class="col-md-4"><img src="" class="card-img rounded-circle card-persona-pic" alt="..."></div><div class="col-md-8"><h5 class="card-title title-card-persona__name"><strong>José Luis</strong></h5><p class="title-card-persona__infos">Gerente de Projetos</p><p class="title-card-persona__infos">General Electric</p></div></div></div></div></div></div></div></header><section><div class="container"><h2 class="h4 mt-5">Atividades do Projeto</h2><div class="row py-5"><ul class="col-md-4"><li class="querop-step__li"><a class="querop-step">Ante-Projeto <span class="badge badge-pill badge-success">Ok</span></a></li><li class="querop-step__li"><a class="querop-step">Diagnóstico de Processo <span class="badge badge-pill badge-success">Ok</span></a></li><li class="querop-step__li" ng-click="projectManageController.changeForm(\'levantamento\')" ng-class="{\'active\': projectManageController.displayLevantamento}"><a class="querop-step">Levantamento de Soluções <span class="badge badge-pill badge-success">Ok</span></a></li><li class="querop-step__li"><a class="querop-step">Desenho do Novo Processo <span class="badge badge-pill badge-success">Ok</span></a></li><li class="querop-step__li"><a class="querop-step">Desenho do Novo Processo <span class="badge badge-pill badge-success">Ok</span></a></li><li class="querop-step__li"><a class="querop-step">Aplicação do Novo Processo <span class="badge badge-pill badge-success">Ok</span></a></li><li class="querop-step__li" ng-click="projectManageController.changeForm(\'relatorio\')" ng-class="{\'active\': projectManageController.displayRelatorio}"><a class="querop-step">Relatório</a></li></ul><div class="col-md-8" ng-if="projectManageController.displayLevantamento"><h2 class="h3">Levantamento de Problemas</h2><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lobortis odio nibh, in venenatis ante lobortis sit amet. In posuere viverra cursus. Vestibulum rutrum turpis vel dui tempor, nec faucibus neque bibendum. Quisque in dolor turpis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur augue et posuere euismod. Ut odio sapien, aliquam eu commodo eget, cursus nec nibh.</p><hr><ul class="nav nav-pills mb-3" id="pills-tab" role="tablist"><li class="nav-item"><a class="nav-link active" id="pills-anexo-tab" data-toggle="pill" href="#pills-anexo" role="tab" aria-controls="pills-anexo" aria-selected="true">Anexo</a></li><li class="nav-item"><a class="nav-link" id="pills-mensagem-tab" data-toggle="pill" href="#pills-mensagem" role="tab" aria-controls="pills-mensagem" aria-selected="false">Mensagens</a></li></ul><div class="tab-content" id="pills-tabContent"><div class="tab-pane fade show active" id="pills-anexo" role="tabpanel" aria-labelledby="pills-anexo-tab"><div id="accordion"><div class="card"><div class="card-header" id="headingOne"><h3 class="mb-0"><button class="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">Compartilhados por você (1)</button></h3></div><div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion"><div class="card-body"><input type="file" class="form-control-file"></div></div></div><div class="card"><div class="card-header" id="headingTwo"><h3 class="mb-0"><button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">Compartilhados por você (2)</button></h3></div><div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordion"><div class="card-body">Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven\'t heard of them accusamus labore sustainable VHS.</div></div></div></div></div><div class="tab-pane fade" id="pills-mensagem" role="tabpanel" aria-labelledby="pills-mensagem-tab">DISCUSS</div></div></div><div class="col-md-8" ng-if="projectManageController.displayRelatorio"><h2 class="h3">Relatório</h2><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lobortis odio nibh, in venenatis ante lobortis sit amet. In posuere viverra cursus. Vestibulum rutrum turpis vel dui tempor, nec faucibus neque bibendum. Quisque in dolor turpis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur augue et posuere euismod. Ut odio sapien, aliquam eu commodo eget, cursus nec nibh.</p><hr><form class="querop-form-cadastro__ptojeto"><div class="form-group"><label for="projectSummary" class="h5">O que foi feito:</label> <textarea class="form-control" id="projectSummary" rows="3"></textarea></div><div class="form-group"><label for="projectSummaryHow" class="h5">Como foi feito:</label> <textarea class="form-control" id="projectSummaryHow" rows="3"></textarea></div><div class="form-group"><label for="projectSummaryConclusions" class="h5">Conclusões e Resultados:</label> <textarea class="form-control" id="projectSummaryConclusions" rows="3"></textarea></div><input type="submit" value="Próximo" class="btn btn-primary"></form></div></div></div></section></div>'),e.put("app/project/new.html",'<div class="main" ng-controller="ProjectNewController as projectNewController"><div><acme-navbar></acme-navbar></div><header class="jumbotron jumbotron-fluid pb-4 mb-0 querop-header-pg"><div class="container"><div class="row"><div class="col"><strong>Projetos</strong><h1 class="h2">Criar Projeto</h1></div></div></div></header><section><div class="container"><div class="row py-5"><ul class="col-md-3"><li><a class="querop-step" ng-click="projectNewController.changeForm(\'introduction\')" ng-class="{\'current\': projectNewController.displayIntrodution}">1. Introdução</a></li><li><a class="querop-step" ng-click="projectNewController.changeForm(\'subjects\')" ng-class="{\'current\': projectNewController.displayAppliedSubjects}">2. Matérias Aplicadas</a></li><li><a class="querop-step" ng-click="projectNewController.changeForm(\'schedule\')" ng-class="{\'current\': projectNewController.displaySchedule}">3. Cronograma</a></li><li><a class="querop-step" ng-click="projectNewController.changeForm(\'publish\')" ng-class="{\'current\': false}">4. Publicar</a></li></ul><div class="col-md-5 offset-md-1" ng-if="projectNewController.displayIntrodution"><form class="querop-form-cadastro__ptojeto"><div class="form-group"><label for="projectPicture" class="h5">Escolha uma foto para ilustrar o projeto</label> <input type="file" class="form-control-file" id="projectPicture"></div><div class="form-group"><label for="projectName" class="h5">Qual é o nome do projeto?</label> <input type="text" class="form-control" id="projectName" aria-describedby="projectName" placeholder="Nome do Projeto"> <small id="projectName" class="form-text text-muted">Crie um nome objetivo e que chame a atenção dos alunos</small></div><div class="form-group"><label for="projectName" class="h5">Qual é o tipo de projeto?</label><select class="form-control" id="exampleFormControlSelect1"><option>Projetos Práticos</option><option>Projetos Práticos</option><option>Trabalhos de Conclusão de Curso</option></select></div><div class="form-group"><label for="projectSummary" class="h5">Resuma o seu Projeto</label> <textarea class="form-control" id="projectSummary" rows="3"></textarea></div><input type="submit" value="Próximo" class="btn btn-primary" ng-click="projectNewController.changeForm(\'subjects\')"></form></div><div class="col-md-5 offset-md-1" ng-if="projectNewController.displayAppliedSubjects"><form class="querop-form-cadastro__ptojeto"><div class="form-group"><label for="projectCourses" class="h5">Esse projeto será feito para qual curso?</label><div class="row"><div class="col-md-6"><select class="form-control" id="projectCourses"><option>Administração</option><option>Curso 01</option><option>Curso 02</option><option>Curso 03</option><option>Curso 04</option></select></div><div class="col-md-6"><a href="#">Adicionar outro Curso</a></div></div></div><div class="form-group"><label for="projectkeyWords" class="h5">Quais palavras-chave representam o projeto?</label> <input type="text" class="form-control mb-3" id="projectkeyWords" aria-describedby="projectkeyWords" placeholder="Digite a Palavra-chave"> <button class="btn btn-outline-primary">Inovação x</button> <button class="btn btn-outline-primary">Inovação x</button> <button class="btn btn-outline-primary">Inovação x</button></div><div class="form-group"><label for="projectSubjects" class="h5">Quais matérias são aplicadas nesse projeto?</label><div class="row"><div class="col-md-6"><select class="form-control" id="projectSubjects"><option>Cálculo Aplicado</option><option>Matéria 01</option><option>Matéria 02</option><option>Matéria 03</option><option>Matéria 04</option></select></div><div class="col-md-6"><a href="#">Adicionar outro Curso</a></div></div></div><button type="button" class="btn btn-link">Voltar</button> <input type="submit" value="Próximo" class="btn btn-primary" ng-click="projectNewController.changeForm(\'schedule\')"></form></div><div class="col-md-5 offset-md-1" ng-if="projectNewController.displaySchedule"><form class="querop-form-cadastro__ptojeto"><div class="form-group"><label for="projectDuration" class="h5">Qual a duração desse projeto?</label> <input type="text" class="form-control mb-3" id="projectDuration" aria-describedby="projectkeyWords" placeholder="DD/MM/AAAA"></div><div class="form-group form-check"><input type="checkbox" class="form-check-input" id="agreeWithTerms"> <label class="form-check-label" for="agreeWithTerms">Concordo com os <a href="#">Termos de Serviço</a> e com as <a href="#">Diretrizes de Relacionamento com Alunos</a></label></div><button type="button" class="btn btn-link">Voltar</button><button type="button" class="btn btn-primary" ng-click="projectNewController.publishProject()">Publicar Projeto</button></form></div></div></div></section></div>'),e.put("app/mentor/mentor.html",'<div class="main" ng-controller="MentorController as mentorController"><div><acme-navbar></acme-navbar></div><header class="jumbotron jumbotron-fluid pb-4 mb-0 querop-header-pg"><div class="container"><div class="row"><div class="col"><h1 class="h3">Meus Projetos <a href="" class="btn btn-light" ng-click="mentorController.redirectToCreateProject()">+ Novo Projeto</a></h1></div></div></div></header><section><div class="container"><div class="row py-5"><div class="col"><div class="row mb-5"><div class="card-deck"><main-card item="project" class="card" ng-repeat="project in mentorController.projects"></main-card></div></div><nav aria-label="Page navigation example"><ul class="pagination justify-content-center"><li class="page-item disabled"><a class="page-link" href="#" tabindex="-1" aria-disabled="true">Anterior</a></li><li class="page-item"><a class="page-link" href="#">1</a></li><li class="page-item"><a class="page-link" href="#">2</a></li><li class="page-item"><a class="page-link" href="#">3</a></li><li class="page-item"><a class="page-link" href="#">Próximo</a></li></ul></nav></div></div></div></section><section><div class="container"><div class="card-deck row mb-5"><h2 class="h4 mb-4 col-12">Últimos projetos publicados</h2><main-card item="project" class="card" ng-repeat="project in mentorController.projects"></main-card></div><nav aria-label="Page navigation example"><ul class="pagination justify-content-center"><li class="page-item disabled"><a class="page-link" href="#" tabindex="-1" aria-disabled="true">Anterior</a></li><li class="page-item"><a class="page-link" href="#">1</a></li><li class="page-item"><a class="page-link" href="#">2</a></li><li class="page-item"><a class="page-link" href="#">3</a></li><li class="page-item"><a class="page-link" href="#">Próximo</a></li></ul></nav></div></section><section class="bg-light-gray py-4"><div class="container"><div class="row mt-5"><h2 class="h4 mb-4">Alunos que podem se interessar pelos seus projetos</h2><div class="card-deck"><div ng-repeat="mentor in mentorController.mentors"><card-mentor item="mentor"></card-mentor></div></div></div></div></section><section><dir-disqus config="disqusConfig"></dir-disqus></section></div>'),e.put("app/prospect/prospect.html",'<div class="main" ng-controller="ProspectController as prospectController"><div><acme-navbar></acme-navbar></div><header class="jumbotron jumbotron-fluid pb-4 mb-0"><div class="container"><div class="row"><div class="col-md-5"><strong>Cursos > Administração > Projetos Práticos</strong><h1 class="h2">Aumentando produtividade de processos</h1><p class="lead">Neste projeto, foi realizado o diagnóstico de processos de trabalho, identificação de problemas e redesenho para aumentar a produtividade de trabalho</p></div><div class="col-md-7 header-wrapper__personas"><div class="row no-gutters"><div class="col-md-4"><div class="row"><p class="col-12 title-card-persona">FACULDADE</p><div class="col-md-4"><img src="/assets/images/faculdade.jpg" class="card-img rounded-circle card-persona-pic" alt="..."></div><div class="col-md-8"><h5 class="card-title title-card-persona__name"><strong>Universidade Joseense dos Campos</strong></h5></div></div></div><div class="col-md-4"><div class="row"><p class="col-12 title-card-persona">MENTOR</p><div class="col-md-4"><img src="/assets/images/mentor.jpg" class="card-img rounded-circle card-persona-pic" alt="..."></div><div class="col-md-8"><h5 class="card-title title-card-persona__name"><strong>José Luis</strong></h5><p class="title-card-persona__infos">Gerente de Projetos</p><p class="title-card-persona__infos">General Electric</p></div></div></div><div class="col-md-4"><div class="row"><p class="col-12 title-card-persona">ALUNO</p><div class="col-md-4"><img src="/assets/images/aluno.jpg" class="card-img rounded-circle card-persona-pic" alt="..."></div><div class="col-md-8"><h5 class="card-title title-card-persona__name"><strong>Josão da Silva</strong></h5><p class="title-card-persona__infos">Gerente de Projetos</p><p class="title-card-persona__infos">General Electric</p></div></div></div></div></div></div></div></header><section><div class="container"><div class="row py-5"><div class="col-md-6"><h2 class="h4 mb-5">Resumo do Projeto</h2><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean porta placerat nulla, at mollis mi consequat sit amet. Vivamus nibh ipsum, malesuada vel pharetra sed, accumsan in dolor. Aenean volutpat neque lorem. Aenean feugiat felis quis nulla pharetra, venenatis porttitor nulla suscipit. Nullam vel libero lorem. Praesent auctor eleifend urna, ut tincidunt leo porttitor eu. Suspendisse ultrices ac est in dictum. Maecenas semper consequat risus. Pellentesque non lectus urna. Curabitur aliquet ligula id lorem aliquet, in gravida arcu ornare. In dictum nisi quam, vel venenatis urna convallis a.</p><p>Sed tortor risus, gravida imperdiet tristique ac, ultrices in ligula. Suspendisse facilisis gravida ultricies. Phasellus pharetra risus lacinia, lacinia sapien ac, consequat mi. Duis lobortis egestas augue, id pulvinar quam lacinia nec. Sed ultrices purus nec magna ultrices laoreet. Fusce ornare nisl eget sagittis varius. Cras ac velit condimentum, ultricies turpis vel, pretium lectus. Vestibulum eget dignissim enim, id sollicitudin enim. Duis a tortor nec nisi viverra posuere. Integer non posuere neque.</p><p>Ut elementum lectus ut purus fringilla vehicula. Duis eget quam vulputate, varius turpis ac, rhoncus nunc. Suspendisse sed mattis eros, vel maximus enim. Ut hendrerit justo sed nibh dictum auctor. Morbi mollis maximus elit, ac commodo lectus aliquam ac. Praesent non convallis enim. In mattis sem leo, eget laoreet neque ornare nec. Cras id maximus eros. Vestibulum vitae orci auctor, mollis urna ac, auctor diam.</p></div><div class="col-md-5 offset-md-1"><div class="form-readlall-article p-5"><h2 class="h4 mb-5">Quer ler o projeto na integra?</h2><form><div class="form-group"><input type="text" class="form-control" placeholder="Nome"></div><div class="form-group"><input type="email" class="form-control" placeholder="E-mail"></div><div class="form-group form-check"><input type="checkbox" class="form-check-input" id="exampleCheck1"> <label class="form-check-label" for="exampleCheck1">Receber indicações projetos publicados com temas relacionados ao Curso de Administração</label></div><button type="submit" class="btn btn-primary btn-block">Acessar Projeto</button></form></div></div></div></div></section><section><div class="container"><div class="row py-5"><div class="col-md-6"><h2 class="h4 mb-5">Conceitos Utilizados das Matérias:</h2><div class="row"><div class="row col-md-12"><label class="col-md-4">Análise de Custos</label><div class="col-md-8"><div class="progress mt-1"><div class="progress-bar" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div></div></div></div><div class="row col-md-12"><label class="col-md-4">Processos</label><div class="col-md-8"><div class="progress mt-1"><div class="progress-bar" role="progressbar" style="width: 65%" aria-valuenow="65" aria-valuemin="0" aria-valuemax="100"></div></div></div></div><div class="row col-md-12"><label class="col-md-4">Diagnóstico de Sistemas</label><div class="col-md-8"><div class="progress mt-1"><div class="progress-bar" role="progressbar" style="width: 68%" aria-valuenow="68" aria-valuemin="0" aria-valuemax="100"></div></div></div></div><div class="row col-md-12"><label class="col-md-4">Gestão de Projetos</label><div class="col-md-8"><div class="progress mt-1"><div class="progress-bar" role="progressbar" style="width: 85%" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div></div></div></div><div class="row col-md-12"><label class="col-md-4">Modelo de Gestão</label><div class="col-md-8"><div class="progress mt-1"><div class="progress-bar" role="progressbar" style="width: 40%" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"></div></div></div></div><div class="row col-md-12"><label class="col-md-4">Metodologias Ágeis</label><div class="col-md-8"><div class="progress mt-1"><div class="progress-bar" role="progressbar" style="width: 58%" aria-valuenow="58" aria-valuemin="0" aria-valuemax="100"></div></div></div></div></div></div><div class="col-md-5 offset-md-1"><h2 class="h4 mb-5">Palavras-Chave</h2><div><a ng-repeat="subject in homeController.subjects track by subject._id" href="" class="btn btn-outline-secondary m-1">{{subject.name}}</a></div></div></div></div></section><section><div class="container"><div class="row mt-5"><h2 class="h4 mb-5 col-12">Projetos Relacionados</h2><div class="card-deck"><main-card item="project" class="card" ng-repeat="project in homeController.projects"></main-card></div></div></div></section><section><dir-disqus config="disqusConfig"></dir-disqus></section></div>'),e.put("app/student/student.html",'<div class="main" ng-controller="StudentController as studentController"><div><acme-navbar></acme-navbar></div><header class="jumbotron jumbotron-fluid pb-4 mb-0 querop-header-pg"><div class="container"><div class="row"><div class="col"><h1 class="h3">Projetos selecionados para você</h1></div></div></div></header><section><div class="container"><div class="row py-5"><div class="col-md-7"><div class="row mb-5"><div class="col-12 card mb-4 card-destaque-aluno p-0"><img src="/assets/images/aluno.jpg" class="card-img-top" alt="..."><div class="card-body text-center querop-card-destaque-aluno"><div class="d-flex"><h5 class="card-title">Gerenciando ferramentas ágeis dentro de projetos</h5><strong>Projeto Prático</strong><p class="card-text">Carlos da Silva, Lucas Silva e Silva</p></div></div><div class="querop-wrapper-destaque-card-aluno__footer"><a href="" class="btn btn-outline-light ml-auto mr-auto mb-4">Acessar</a><div class="card-footer bg-light"><small class="text-muted">Publicado: 01/06/2019</small></div></div></div><div class="card-deck"><main-card item="project" class="card" ng-repeat="project in studentController.projects"></main-card></div></div><nav aria-label="Page navigation example"><ul class="pagination justify-content-center"><li class="page-item disabled"><a class="page-link" href="#" tabindex="-1" aria-disabled="true">Anterior</a></li><li class="page-item"><a class="page-link" href="#">1</a></li><li class="page-item"><a class="page-link" href="#">2</a></li><li class="page-item"><a class="page-link" href="#">3</a></li><li class="page-item"><a class="page-link" href="#">Próximo</a></li></ul></nav></div><div class="col-md-4 offset-md-1"><h2 class="h4 mb-3">Por tema</h2><ul class="list-group"><li class="list-group-item d-flex justify-content-between align-items-center">Empreendedorismo <span class="badge badge-secondary badge-pill">14</span></li><li class="list-group-item d-flex justify-content-between align-items-center">Análise de Custos <span class="badge badge-secondary badge-pill">2</span></li><li class="list-group-item d-flex justify-content-between align-items-center">Comportamento Organizacional <span class="badge badge-secondary badge-pill">1</span></li><li class="list-group-item d-flex justify-content-between align-items-center">Imposto Mercadológico <span class="badge badge-secondary badge-pill">1</span></li><li class="list-group-item d-flex justify-content-between align-items-center">Planejamento Estratégico <span class="badge badge-secondary badge-pill">1</span></li><li class="list-group-item d-flex justify-content-between align-items-center">Imposto Mercadológico <span class="badge badge-secondary badge-pill">1</span></li></ul><h2 class="h4 mb-3 mt-5">Por tipo</h2><ul class="list-group"><li class="list-group-item d-flex justify-content-between align-items-center">Projetos Práticos <span class="badge badge-secondary badge-pill">24</span></li><li class="list-group-item d-flex justify-content-between align-items-center">Artigos Ciêntificos <span class="badge badge-secondary badge-pill">2</span></li><li class="list-group-item d-flex justify-content-between align-items-center">Trabalhos de Conclusão de Curso <span class="badge badge-secondary badge-pill">1</span></li></ul></div></div></div></section><section class="bg-light-gray py-4"><div class="container"><div class="row mt-5"><h2 class="h4 mb-4">Profissionais que podem te ajudar</h2><div class="card-deck"><div ng-repeat="mentor in studentController.mentors"><card-mentor item="mentor"></card-mentor></div></div></div></div></section></div>'),
e.put("app/components/card-mentor/cardmentor.html",'<div class="card querop-card-persona-mock"><img src="assets/images/mentor.jpg" alt="" class="img-profile-mock rounded-circle"><div class="card-body"><h5 class="card-title"><a>{{vm.item.name}}</a></h5><p class="card-text">{{vm.item.jobDescription}}</p><p class="card-text"><small class="text-muted">{{vm.item.company}}</small></p></div></div>'),e.put("app/components/main-card/maincard.html",'<img src="assets/images/thumb_projeto.jpeg" class="card-img-top" alt="..."><div class="card-body"><h5 class="card-title">{{vm.item.title}}</h5><strong>{{vm.item.summary}}</strong><p class="card-text">{{vm.item.owner}}</p></div><a href="" class="btn btn-outline-primary">Acessar</a><div class="card-footer"><small class="text-muted">Publicado: {{vm.item.publishedAt}}</small></div>'),e.put("app/components/navbar/navbar.html",'<nav class="navbar navbar-expand-lg navbar-light bg-light"><div class="container"><a class="navbar-brand" href="#">QueroPrática</a> <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button><div class="collapse navbar-collapse" id="navbarText"><ul class="navbar-nav mr-auto"><li class="nav-item"><a class="nav-link" href="#">Home</a></li><li class="nav-item"><a class="nav-link" href="#">O que é?</a></li><li class="nav-item"><a class="nav-link" href="#">Cursos</a></li><li class="nav-item"><form class="form-inline my-2 my-lg-0"><input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"> <button class="btn btn-outline-light my-2 my-sm-0" type="submit">Search</button></form></li></ul></div><div class="navbar-nav flex-row ml-md-auto d-none d-md-flex"><img src="/assets/images/aluno.jpg" alt="Foto do aluno" class="rounded-circle" style="width: auto; height: 33px; margin-right:24px;"> <img src="/assets/images/icon-notification.png" alt="ícone de notificação" style="width: auto; height: 33px;"></div></div></nav>')}]);