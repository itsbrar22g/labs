var http = require("http");
var fs = require("fs");
var portNumber = process.argv[2];
var fileLocation = process.argv[3];
var server = http.createServer(function (req, res) {  
   // request handling logic...  
   var src = fs.createReadStream(fileLocation);
   src.pipe(res);
 }); 
 server.listen(portNumber);