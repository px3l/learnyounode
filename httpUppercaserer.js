let http = require('http')
let map = require('through2-map')
let port = process.argv[2]

let httpServer = http.createServer(function(req, res){
	req.pipe(map(function(chunk){
		return chunk.toString().toUpperCase();
	})).pipe(res)	
})

httpServer.listen(port)