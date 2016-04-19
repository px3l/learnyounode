var http = require("http");
var url = require("url");
var port = process.argv[2];

var httpServer = http.createServer(function(req, res){
	var path = url.parse(req.url, true)
	if (path == "/api/parsetime"){
		
		res = 	{
					"hour": 14,
					"minute": 23,
					"second": 15
				}
	}
})

httpServer.listen(port);