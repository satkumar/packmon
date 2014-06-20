angular.module("CaptureService",[])
  .factory('Capture',["$http",function($http){
  var beginCapture = function(formData){
    var promise = $http.post('/api/startCapture', formData);
    console.log("Logging promise: " + promise);
    return promise;
  };
  var getPackets = function(capturer) {
    console.log("Request to backend to getPackets");
    var promise = $http.post('/api/getPackets',{'packmon': capturer});
    return promise;
  };
  var setCapturer = function(capturer) {
    var self = this;
    console.log("Setting capturer: " + capturer);
    self.capturer = capturer;
    console.log("Capturer type: " + capturer.constructor);
  };
  var getCapturer = function() {
    var self = this;
    return self.capturer;
  };
  var endCapture = function(capturer) {
    console.log("Stopping capture ...");
    var promise = $http.post('/api/stopCapture',{'capturer': capturer});
    return promise;
  };
  return {
    startCapture: function(formData) {return beginCapture(formData);},
    getPackets: function(capturer) {return getPackets(capturer);},
    setCapturer: function(capturer) {return setCapturer(capturer);},
    getCapturer: function() {return getCapturer();},
    stopCapture: function(capturer) { return endCapture(capturer);}
  };
}]);
