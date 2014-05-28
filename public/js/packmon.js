/*
 * packmon
 * https://github.com/satkumar/packmon
 *
 * Copyright (c) 2014 Sathiish Kumar
 * Licensed under the MIT license.
 */
var pcap = require('pcap');

function Packmon() {
  this.session = null;
}

Packmon.prototype.capture = function(interface,filterExpression) {
  var self = this;
  self.session = pcap.createSession(interface, filterExpression);
};

Packmon.prototype.stopCapture = function(){
  var self = this;
  pcap.close();
  self.session = null;
};

exports.Packmon = Packmon;
exports.pcap = pcap;
exports.capture = function(interface,filterExpression) {
  var self = this;
  self.session = pcap.createSession(interface,filterExpression);
};
