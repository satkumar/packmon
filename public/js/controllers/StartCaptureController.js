var startCapture = angular.module('StartCaptureController',[]);
startCapture.controller('StartCaptureController',["$scope","$location","Capture",function($scope,$location,Capture){
  $scope.tagline = "Start Capture controller";
  $scope.formData = {};
  $scope.startCapture = function(path) {
    var promise = Capture.startCapture({'interface': $scope.formData.interface,'filter': $scope.formData.filter});
    //after the promise is resolved, we are free to change the view, until then we need to block the view
    promise.then(function(result){
      console.log("Promise after resolution: " + result.data.capturer);
      //Set the capturer in the service (service is singleton so it would preserve it)
      Capture.setCapturer(result.data.capturer);
      //changing the view to the view-capture path
      $location.path(path);
    },function(result){
      console.log("Failed to start capture: " + result);
    });
  };
}]);
