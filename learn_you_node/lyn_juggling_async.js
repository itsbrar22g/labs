var http = require('http');
var URLs = process.argv.slice(2);

var count = 0;
var resArr = [];
URLs.forEach(getData);

function getData(url, index) {
  http.get(url, function(response) {
    var str = '';
    response.setEncoding('utf8');
    response.on("data", function(data) {
      str += data;
    });
    response.on('end', function() {
      resArr[index] = str;
      count++;
      if (count === URLs.length) {
        resArr.forEach(function(msg) {
          console.log(msg);
        });
      }
    });
  });
}