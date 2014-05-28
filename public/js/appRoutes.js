  angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

  $routeProvider
    .when('/', {
      templateUrl: 'views/start-capture.html',
      controller: 'StartCaptureController'
    })
    .when('/view-capture', {
      templateUrl: 'views/view-capture.html',
      controller: 'ViewCaptureController'
    });

  $locationProvider.html5Mode(true);

}]);
