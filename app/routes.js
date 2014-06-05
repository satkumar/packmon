/*######## NODE ROUTES #######*/
var packmon = require(__dirname + '/../public/js/packmon.js');
module.exports = function(app) {
    // ====== DEFAULT ROUTE(GET method) =====
    app.get('*', function(req, res) {
      res.sendfile(__dirname + '/../public/index.html');
    });

    // ====== START CAPTURE(POST method) =====
    app.post('/api/startCapture', function(req, res) {
      try{
        var device = req.body.interface;
        var filterExpression = req.body.filter || "tcp port 80";
        console.log("Request was made to capture on " + device + " with filter expression " + filterExpression);
        var capturer = new packmon.Packmon();
        var captureSession = capturer.startCapture(device,filterExpression);
        capturer.setupListeners();
        res.send({'capturer': capturer,'session': captureSession});
      } catch(err) {
        res.send({'error': "Could not start capture session" + err.stack});
        console.log("Error occurred in creating a capture session: " + err.stack);
      }
    });

    app.post('/api/getPackets',function(req,res){
      try {
        console.log("Getting packets for given packmon object");
        var capturer = req.body.packmon;
        var packets = capturer.getPackets;
        res.send({'packets': packets});
      } catch(err) {
        res.send({'error': "Could not retrieve the packets for the given session: " + err.stack});
        console.log("Error: Could not retrieve packets from capture: " + err.stack);
      }
    });
  };
