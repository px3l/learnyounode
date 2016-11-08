let http = require('http')
let url = require('url')
let port = process.argv[2]

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
	let jsonString = JSON.stringify(data)
	res.writeHead(200, { 'Content-Type': 'application/json' })
	res.end(jsonString)
}

let httpServer = http.createServer(function(req, res){
	let urlProps = url.parse(req.url, true);
	let path = urlProps.pathname;
	let date = new Date(urlProps.query.iso);

	if (path == "/api/parsetime"){
		let data = makeTime(date)
		writeResponse(data, res)
	} else if (path == "/api/unixtime"){
		let data = unixTime(date)
		writeResponse(data, res)
	} 
})

httpServer.listen(port);