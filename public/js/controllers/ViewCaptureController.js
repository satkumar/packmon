var viewCapture = angular.module('ViewCaptureController',[]);
viewCapture.controller("ViewCaptureController",["$scope","Capture","$timeout",function($scope,Capture,$timeout){
  $scope.timeInMs = 0;
  var updatePackets = function() {
    $scope.stopCapture = function() {
      $timeout.cancel(packetChecker);
      Capture.stopCapture();
    };
    $scope.capturer = Capture.getCapturer();
    var promise = Capture.getPackets($scope.capturer);
    promise.then(function(result) {
      console.log("Getting packets from the node backend: " + JSON.stringify(result));
      $scope.packets = JSON.stringify(result);
    },function(result) {
      console.log("Promise of packets failed to keep: " + JSON.stringify(result.data));
    });
    $timeout(updatePackets,2000);
  };
  var packetChecker = $timeout(updatePackets, 2000);
}]);
