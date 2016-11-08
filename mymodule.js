let fs = require('fs')

module.exports = function (filePath, fileExt, callback) {

	function filterFile(file){
		if (file.indexOf(".") < 0) return false
		let parts = file.split(".")
		let ext = parts.pop()
		return ext == fileExt
	}

	fs.readdir(filePath, function(err, list){
		if (err) return callback(err)
		let filteredList = list.filter(filterFile)
		callback(null, filteredList)
	})

}