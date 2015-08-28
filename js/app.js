var app = angular.module("PortfolioApp", ["ngRoute"])

app.config(function ($routeProvider, $locationProvider) {
  $locationProvider
  .html5Mode({
    enabled: true,
    requireBase: false
  })

  $routeProvider
  .when('/', {
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
  .when('/add', {
    templateUrl: 'partials/calculator2.html',
    controller: 'CalculatorController2'
  })
  .when('/:first/:second', {
    templateUrl: 'partials/calculator.html',
    controller: 'CalculatorController'
  })
  .otherwise({
    redirectTo: '/'
  })

})
