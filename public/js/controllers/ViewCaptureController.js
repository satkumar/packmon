var viewCapture = angular.module('ViewCaptureController',['infinite-scroll']);
viewCapture.controller("ViewCaptureController",["$scope","Capture",function($scope,Capture){
    $scope.capture = new Capture();
}]);
