var fs = require("fs")

fs.readFile(process.argv[2], function(err, data){
	var fileString = data.toString()
	var fileArray = fileString.split("\n")
	var answer = fileArray.length - 1
	console.log(answer);
})
