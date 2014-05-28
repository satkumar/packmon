angular.module('StartCaptureService', []).factory('StartCapture', ['$http', function($http) {

  return {
    // call to POST and create a new capture session
    create : function(formData) {
      return $http.post('/api/startCapture', formData);
    }
  };
}]);
