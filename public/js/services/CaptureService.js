angular.module("CaptureService",[])
  .factory('Capture',["$http",function($http){
  var beginCapture = function(formData){
    var promise = $http.post('/api/startCapture', formData);
    promise.then(function(result){
      //console.log("Started Capture: " + JSON.stringify(result.data.capturer));
      return result.data.capturer;
    },function(result){
      console.log("Failed to start capture: " + result);
    });
  };
  var getPackets = function(capturer) {
    console.log("Request to backend to getPackets with: " + typeof capturer);
    var promise = $http.post('/api/getPackets',{'packmon': capturer});
    promise.then(function(result){
      console.log("Getting packets from the node backend: " + JSON.stringify(result.data.packets));
      return JSON.stringify(result.data.packets);
    });
  };
  return {
    startCapture: function(formData) {return beginCapture(formData);},
    getPackets: function() {return getPackets();}
  };
}]);
