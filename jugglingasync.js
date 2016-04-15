var http = require("http");
var bl = require("bl");

var callbackCounter = 0;

for (var i=2; i<process.argv.length; i++) {
	http.get(process.argv[i], function(response){
		response.pipe(bl(function (err, data){
			callbackCounter += 1
			if (callbackCounter == 3) {
				console.log(data.toString())
			}
		}))
	})
}