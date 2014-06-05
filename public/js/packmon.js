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
  this.packets = [];
}
Packmon.prototype.getPackets = function() {
  return this.packets;
};
Packmon.prototype.setupListeners = function() {
  // listen for packets, decode them, and feed TCP to the tracker
  var self = this;
  self.session.on('packet', function (raw_packet) {
    var packet = pcap.decode.packet(raw_packet);
    pcap.print.packet(packet);
    self.savePacket(packet);
  });
};
Packmon.prototype.startCapture = function(device,filterExpression) {
  var bf_size = 10;
  this.session = pcap.createSession(device,filterExpression,(bf_size * 1024 * 1024));
  return this.session;
};
Packmon.prototype.stopCapture = function() {
  pcap.close();
  this.session = null;
};
Packmon.prototype.savePacket = function(packet) {
  var packetTcp = packet.link['ip'].tcp;
  this.packets.push(packetTcp.data);
};
exports.Packmon = Packmon;
exports.pcap = pcap;
