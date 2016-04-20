var http = require("http");
var url = require("url");
var port = process.argv[2];

function makeTime(time){
	return {
		hour: time.getHours(),
		minute: time.getMinutes(),
		second: time.getSeconds()
	}
}

function unixTime(time){
	return {
		unixtime: time.getTime()
	}

var httpServer = http.createServer(function(req, res){
	var path = url.parse(req.url, true);
	var time = new Date(path.query.iso);
	var result;

	if (path == "/api/parsetime"){
		
	}
})

httpServer.listen(port);