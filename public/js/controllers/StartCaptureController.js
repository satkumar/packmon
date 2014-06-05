var startCapture = angular.module('StartCaptureController',[]);
startCapture.controller('StartCaptureController',["$scope","$location","$rootScope","Capture",function($scope,$location,$rootScope,Capture){
  $scope.tagline = "Start Capture controller";
  $scope.formData = {};
  $scope.startCapture = function(path) {
    $scope.capturer = Capture.startCapture({'interface': $scope.formData.interface,'filter': $scope.formData.filter});
    $scope.path = path;
  };
  $scope.$watch('capturer',function(newVal,oldVal){
    $location.path($scope.path);
    $rootScope.$on('$routeChangeSuccess', function () {
        $rootScope.capturer = newVal;
    });
  });
}]);
