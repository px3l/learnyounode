var http = require("http");
var fs = require("fs");
var map = require("through2-map");

var port = process.argv[2];

var httpServer = http.createServer(function(req, res){

	req.pipe(map(function(req){
		return req.toString().toUpperCase();
	}).pipe(res))

})

httpServer.listen(port)