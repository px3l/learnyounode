var fs = require("fs");

module.exports = function (filePath, fileExt, callback) {

	function filterFile(file){
		if (file.indexOf(".") < 0) return false
		var parts = file.split(".")
		var ext = parts.pop()
		return ext == fileExt
	}

	fs.readdir(filePath, function(err, list){
		if (err) return callback(err)
		var filteredList = list.filter(filterFile)
		callback(null, filteredList)
	})

}