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
  this.packets = new Array(100);
  this.getPackets = function() {return this.packets;};
  this.setPackets = function(packets) { this.packets.push(packets);};
}

Packmon.prototype.setupListeners = function() {
  // listen for packets, decode them, and feed TCP to the tracker
  var self = this;
  self.session.on('packet', function (raw_packet) {
    console.log("Packet received trying to save it .. \n");
    var packet = pcap.decode.packet(raw_packet);
    pcap.print.packet(packet);
    var packetTcp = packet.link.ip.tcp;
    self.setPackets(packetTcp);
    console.log("Saved Packet: " + JSON.stringify(packetTcp));
  });
};
Packmon.prototype.startCapture = function(device,filterExpression) {
  var bf_size = 10;
  var self = this;
  self.session = pcap.createSession(device,filterExpression,(bf_size * 1024 * 1024));
  return self.session;
};
Packmon.prototype.stopCapture = function() {
  var self = this;
  pcap.close();
  self.session = null;
};
exports.Packmon = Packmon;
exports.pcap = pcap;
