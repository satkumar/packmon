var viewCapture = angular.module('ViewCaptureService',[]);
viewCapture.service('ViewCapture', ["$http",function($http) {
  this.session = null;
  this.getSession = function(){
    return this.session;
  };
  this.setSession = function(captureSession){
    this.session = captureSession;
  };
  this.decode = function(packet){
    return $http.post('/api/decode',packet);
  };
}]);
viewCapture.factory('Capture', function(ViewCapture){
  var Capture = function(){
    this.packets = [];
    this.busy = false;
    this.after = '';
    this.session = ViewCapture.getSession();
  };
  Capture.prototype.morePackets = function() {
    if (this.busy) return;
    this.busy = true;
    this.session.on('packet',function(raw_packet) {
      console.log("Saw a packet, Commencing capture");
      var packets = ViewCapture.decode({'packet': raw_packet});
      for (var i = 0; i < packets.length; i++) {
        this.packets.push(packets[i]);
      }
      this.after = "t3_" + this.packets[this.packets.length - 1].id;
      this.busy = false;
    }.bind(this));
  };
  return Capture;
});
