var viewCapture = angular.module('ViewCaptureController',[]);
viewCapture.controller("ViewCaptureController",["$scope","Capture",function($scope,Capture){
  $scope.capturer = Capture.getCapturer();
  var promise = Capture.getPackets($scope.capturer);
  promise.then( function(result) {
    console.log("Getting packets from the node backend: " + JSON.stringify(result.data));
    $scope.packets = JSON.stringify(result.data.packets);
  },function(result) {
    console.log("Promise of packets failed to keep: " + JSON.stringify(result));
  });
}]);
