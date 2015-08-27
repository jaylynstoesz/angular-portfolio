var app = angular.module("PortfolioApp", ["ngRoute"])

app.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'partials/home.html',
      controller: 'MainController'
    })
    .when('/home', {
      templateUrl: 'partials/home.html',
      controller: 'MainController'
    })
    .when('/bio', {
      templateUrl: 'partials/bio.html',
      controller: 'BioController'
    })
    .when('/projects', {
      templateUrl: 'partials/projects.html',
      controller: 'ProjectsController'
    })
    .when('/resume', {
      templateUrl: 'partials/resume.html',
      controller: 'ResumeController'
    })
    .when('/:other*', {
      templateUrl: 'partials/home.html',
      controller: 'MainController'
    })
})
