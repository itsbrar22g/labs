var fs = require('fs')
var path = require('path')


var extension = '.' + process.argv[3]
var location = process.argv[2]
fs.readdir(location, function (err, files) {
  
  if (err) return console.error(err)
  files.forEach(function (file) {
    if (path.extname(file) === extension) {
      console.log(file)
    }
  })
})