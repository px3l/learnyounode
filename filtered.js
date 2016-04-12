var fs = require("fs");
var filePath = process.argv[2];
var fileExt = process.argv[3];

function filterFile(file){
	if (file.indexOf(".") < 0) return false
	var parts = file.split(".")
	var ext = parts.pop()
	return ext == fileExt
}


fs.readdir(filePath, function(err, list){
	var filteredList = list.filter(filterFile);
	filteredList.forEach(function(file){
		console.log(file);
	})
})