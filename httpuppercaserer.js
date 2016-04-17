var http = require("http");
var fs = require("fs");
var map = require("through2-map");

var port = process.argv[2];

var httpServer = http.createServer(function(req, res){
	//receives POST requests only and converts to uppercase then returns to client
	var inStream = fs.createReadStream(req)
	inStream.pipe(map(function(req){
		return req.toString().toUpperCase()
	}).pipe(res))
})