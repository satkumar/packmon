var startCapture = angular.module('StartCaptureController',[]);
startCapture.controller('StartCaptureController',["$scope","$location","StartCapture","ViewCapture",function($scope,$location,StartCapture,ViewCapture){
    $scope.tagline = "Start Capture controller";
    $scope.capture = {};
    $scope.startCapture = function(path) {
      StartCapture.create()
        .success(function(data) {
          ViewCapture.setSession(data.session);
          $location.path(path);
        })
        .error(function(data){
          console.log("Error occurred in capture" + data);
        });
    };
}]);
