angular.module("CaptureService",[])
  .factory('Capture',["$http",function($http){
  var beginCapture = function(formData){
    var promise = $http.post('/api/startCapture', formData);
    console.log("Logging promise: " + promise);
    return promise;
  };
  var getPackets = function(capturer) {
    console.log("Request to backend to getPackets with: " + typeof capturer);
    var promise = $http.post('/api/getPackets',{'packmon': capturer});
    return promise;
  };
  var setCapturer = function(capturer) {
    console.log("Setting capturer: " + capturer);
    this.capturer = capturer;
  };
  var getCapturer = function() {
    console.log("Getting capturer for this session: " + this.capturer);
    return this.capturer;
  };
  return {
    startCapture: function(formData) {return beginCapture(formData);},
    getPackets: function(capturer) {return getPackets(capturer);},
    setCapturer: function(capturer) {return setCapturer(capturer);},
    getCapturer: function() {return getCapturer();}
  };
}]);
