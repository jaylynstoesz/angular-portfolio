
app.controller('NavController', function ($scope, $location) {
  $scope.isActive = function (viewLocation) {
    return viewLocation === $location.path();
  }
})

app.controller('MainController', function ($scope) {
  $scope.message = "!!!!!!!!!!!!!!!!"
})

app.controller('BioController', function ($scope) {
  $scope.message = "initial"
  $scope.clickMe = function (input) {
    console.log(input);
    $scope.message = input
  }
})

app.controller('ResumeController', function ($scope) {
})

app.controller('ProjectsController', function ($scope) {
})

app.controller('CalculatorController', function ($scope, $routeParams) {
  $scope.sum = parseInt($routeParams.first) + parseInt($routeParams.second)
})

app.controller('CalculatorController2', function ($scope, $location) {
  $scope.sum = parseInt($location.search().x) + parseInt($location.search().y)
})
