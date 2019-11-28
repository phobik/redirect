var http = require("http");
const requestIp = require('request-ip');

// create a http server
http
  .createServer(function (req, res) {
    var ip = "127.0.0.1";
    if (req.socket.remoteAddress == ip) console.log("hit!!!!");
    var newLocal = req.connection.remoteAddress.substring(7);
    console.log("remote address:" + req.socket.remoteAddress);
    console.log("remote port:" + req.socket.remotePort);
    console.log("remote family:" + req.socket.remoteFamily);
    const ipMiddleware = function (req, res, next) {
      const clientIp = requestIp.getClientIp(req);
      console.log(clientIp);
      next();
    };
    //if (req.url == '/page-c.html') {
    if (newLocal == ip) {
      // redirect to page-b.html with 301 (Moved Permanently) HTTP code in the response
      //res.writeHead(301, { "Location": "http://" + req.headers['host'] + '/page-b.html' });
      res.writeHead(307, {
        Location: "https://i.imgur.com/hI2ien8.png"
      });
      return res.end();
    } else {
      // for other URLs, try responding with the page
      res.writeHead(307, {
        Location: "https://i.imgur.com/gMtckfl.jpg"
      });
      res.end();
    }
  })
  .listen(8080);