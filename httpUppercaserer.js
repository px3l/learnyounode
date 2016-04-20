var http = require("http");
var map = require("through2-map");
var port = process.argv[2];

var httpServer = http.createServer(function(req, res){

	req.pipe(map(function(chunk){
		return chunk.toString().toUpperCase();
	})).pipe(res)
	
})

httpServer.listen(port)