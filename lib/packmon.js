/*
 * packmon
 * https://github.com/satkumar/packmon
 *
 * Copyright (c) 2014 Sathiish Kumar
 * Licensed under the MIT license.
 */
var pcap = require('pcap')

var listen = function(interface,filterExpression) {
  pcap_session = pcap.createSession(interface, filterExpression);
};
