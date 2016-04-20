var http = require("http");
var url = require("url");
var port = process.argv[2];

function makeTime(date){
	return {
		hour: date.getHours(),
		minute: date.getMinutes(),
		second: date.getSeconds()
	}
}

function unixTime(date){
	return {
		unixtime: date.getTime()
	}
}

function writeResponse(data, res){
	var jsonString = JSON.stringify(data)
	res.writeHead(200, { 'Content-Type': 'application/json' })
	res.end(jsonString)
}

var httpServer = http.createServer(function(req, res){
	var urlProps = url.parse(req.url, true);
	var path = urlProps.pathname;
	var date = new Date(urlProps.query.iso);

	if (path == "/api/parsetime"){
		var data = makeTime(date)
		writeResponse(data, res)
	} else if (path == "/api/unixtime"){
		var data = unixTime(date)
		writeResponse(data, res)
	} 
})

httpServer.listen(port);