var net = require("net");
var port = process.argv[2];

function convertMonth(month){
	month = month+1
	if (month<10){
		return "0"+month
	} else {
		return month
	}
}

var server = net.createServer(function(socket){
	var date = new Date()
	var datetime = 	date.getFullYear()+"-"+
					convertMonth(date.getMonth())+"-"+
					date.getDate()+" "+
					date.getHours()+":"+
					date.getMinutes()+"\n"

	socket.write(datetime)
	socket.end()
})

server.listen(port)