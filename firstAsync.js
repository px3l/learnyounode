let fs = require('fs')

fs.readFile(process.argv[2], function(err, data){
	let fileLines = data.toString().split("\n").length -1
	console.log(fileLines)
})