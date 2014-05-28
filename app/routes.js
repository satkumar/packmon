/*######## NODE ROUTES #######*/
var packmon = require(__dirname + '/../public/js/packmon.js');
module.exports = function(app) {
    app.post('/api/startCapture', function(req, res) {
      try{
        var device = req.body.interface;
        var filterExpression = req.body.filter;
        var captureSession = packmon.capture(device,filterExpression);
        res.send({'session': captureSession});
      } catch(err) {
        //handle error
        res.send({'error': "Could not start capture session" + err});
        console.log("Error occurred in creating a capture session: " + err);
      }
    });

    app.get('*', function(req, res) {
      res.sendfile(__dirname + '/../public/index.html');
    });

    app.post('/api/decode',function(req,res){
      try{
        var packet = packmon.decode.packet(req.body.packet);
        res.send({'packet': packet});
      } catch(err) {
        res.send({'error': "Could not decode packet" + err});
        console.log("Error occurred in decoding packet: " + err);
      }
    });
  };
