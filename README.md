# Packmon
Packet analyzer visualizer with capture. Packmon is interpreted as a wireshark like tool running on your browser. This is built using nodeJS backend coupled with a AngularJS front-end.

## Getting Started
To get started, git clone the repository using `git clone https://github.com/satkumar/packmon.git` and then in the project directory, install node dependencies using `npm install` and bower dependencies using `bower install`. This assumes that you already have node (with nodemon module) and bower installed globally. Then to start the app use `sudo npm start`. The sudo is due to the fact that this application has dependencies on node-pcap and to be able to promiscuously listen on different local interfaces, it needs sudo permission levels.

## Documentation
Packmon is a nodejs-angularjs hybrid app. The nodejs serves as a backend wrapper to offer REST like functions to pcap underneath and angularjs is the front-end to serve a single page app to perform packet captures/analysis. The app depends on [node-pcap](https://github.com/mranney/node_pcap) which is a nodejs module for libpcap native module.

## Contributing
To start contributing please branch from this repository and submit pull requests to be merged on to the main branch.

## License
Copyright (c) 2014 Sathiish Kumar. Licensed under the MIT license.
