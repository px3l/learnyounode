let net = require('net')
let port = process.argv[2]

function convertData(data){
	if (data<10){
		return "0" + data
	} else {
		return data
	}
}

let server = net.createServer(function(socket){
	let date = new Date()
	let datetime = 	date.getFullYear()+"-"+
		convertData(date.getMonth()+1)+"-"+
		convertData(date.getDate())+" "+
		convertData(date.getHours())+":"+
		convertData(date.getMinutes())+"\n"
	socket.write(datetime)
	socket.end()
})

server.listen(port)