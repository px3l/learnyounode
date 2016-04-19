var http = require("http");
var fs = require("fs");

var port = process.argv[2];
var filePath  = process.argv[3];

var httpServer = http.createServer(function(req, res){
	var file = fs.createReadStream(filePath)
	file.pipe(res)
})

httpServer.listen(port)