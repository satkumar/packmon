var app = angular.module("packmon",[]);

app.controller("capture",["$scope","$http",function($scope,$http){
  $scope.formData = {};
  $scope.startCapture = function() {
    $http.post('/api/capture',$scope.formData)
      .error(function(data) {
				    console.log('Error: ' + data);
			       });
  };
}]);
