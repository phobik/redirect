var http = require("http");
var fs = require("fs");

// create a http server
http
  .createServer(function (req, res) {
    var ip = "2.80.139.55"; //var ip = "71.205.238.210";
    if (req.socket.remoteAddress == ip) console.log("hit!!!!");
    var newLocal = req.connection.remoteAddress.substring(7);
    console.log(req.connection);
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