let http = require('http')
let bl = require('bl')
let url = process.argv[2]

http.get(url, function(response){
	response.pipe(bl(function (err, data){
		console.log(data.toString().length)
		console.log(data.toString())
	}))
})