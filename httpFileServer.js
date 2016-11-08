let http = require('http')
let fs = require('fs')

let port = process.argv[2]
let filePath  = process.argv[3]

let httpServer = http.createServer(function(req, res){
	let file = fs.createReadStream(filePath)
	file.pipe(res)
})

httpServer.listen(port)