let fs = require('fs')
let filePath = process.argv[2]
let fileExt = process.argv[3]

function filterFile(file){
	if (file.indexOf(".") < 0) return false
	let parts = file.split(".")
	let ext = parts.pop()
	return ext == fileExt
}

fs.readdir(filePath, function(err, list){
	let filteredList = list.filter(filterFile);
	filteredList.forEach(function(file){
		console.log(file);
	})
})