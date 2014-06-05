var viewCapture = angular.module('ViewCaptureController',[]);
viewCapture.controller("ViewCaptureController",["$scope","Capture",function($scope,Capture){
    $scope.packets = Capture.getPackets();
    console.log("Capture Packets:" + JSON.stringify($scope.packets));
    $scope.$watch('packets',function(){
      console.log("Change was triggered");
    });
}]);
